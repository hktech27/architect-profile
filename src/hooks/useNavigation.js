/**
 * src/hooks/useNavigation.js
 *
 * Manages horizontal section navigation.
 * Returns: { activeIndex, goTo, goNext, goPrev, isTransitioning }
 *
 * Supports: mouse wheel, keyboard arrows, touch swipe, programmatic goTo.
 * On mobile (< 768px) the hook is disabled — sections scroll vertically instead.
 */

import { useState, useEffect, useCallback, useRef } from 'react'
import { TOTAL_SCREENS } from '../data/config.js'

const DEBOUNCE_MS = 700

export function useNavigation() {
  const [activeIndex, setActiveIndex] = useState(0)
  const isTransitioning = useRef(false)
  const touchStartX = useRef(null)
  const touchStartY = useRef(null)

  const isMobile = () => window.innerWidth < 768

  const goTo = useCallback((index) => {
    if (isMobile()) return
    const clamped = Math.max(0, Math.min(TOTAL_SCREENS - 1, index))
    setActiveIndex(clamped)
    isTransitioning.current = true
    setTimeout(() => {
      isTransitioning.current = false
    }, DEBOUNCE_MS)
  }, [])

  const goNext = useCallback(() => {
    if (isMobile()) return
    setActiveIndex((prev) => {
      const next = Math.min(prev + 1, TOTAL_SCREENS - 1)
      isTransitioning.current = true
      setTimeout(() => { isTransitioning.current = false }, DEBOUNCE_MS)
      return next
    })
  }, [])

  const goPrev = useCallback(() => {
    if (isMobile()) return
    setActiveIndex((prev) => {
      const next = Math.max(prev - 1, 0)
      isTransitioning.current = true
      setTimeout(() => { isTransitioning.current = false }, DEBOUNCE_MS)
      return next
    })
  }, [])

  // Mouse wheel / trackpad
  useEffect(() => {
    const handleWheel = (e) => {
      if (isMobile()) return
      if (isTransitioning.current) return

      // Allow vertical scroll inside overflowing elements
      const el = e.target.closest('[data-scrollable]')
      if (el) {
        const atTop = el.scrollTop === 0
        const atBottom = el.scrollTop + el.clientHeight >= el.scrollHeight - 2
        if ((e.deltaY < 0 && !atTop) || (e.deltaY > 0 && !atBottom)) return
      }

      if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) {
        e.deltaX > 0 ? goNext() : goPrev()
      } else {
        e.deltaY > 0 ? goNext() : goPrev()
      }
    }

    window.addEventListener('wheel', handleWheel, { passive: true })
    return () => window.removeEventListener('wheel', handleWheel)
  }, [goNext, goPrev])

  // Keyboard arrows
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (isMobile()) return
      // Don't intercept if focus is inside a modal or scrollable area
      if (e.target.closest('[data-modal]') || e.target.closest('[data-scrollable]')) return
      if (e.key === 'ArrowRight') { e.preventDefault(); goNext() }
      if (e.key === 'ArrowLeft')  { e.preventDefault(); goPrev() }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [goNext, goPrev])

  // Touch swipe
  useEffect(() => {
    const handleTouchStart = (e) => {
      touchStartX.current = e.touches[0].clientX
      touchStartY.current = e.touches[0].clientY
    }
    const handleTouchEnd = (e) => {
      if (isMobile()) return
      if (touchStartX.current === null) return
      const dx = e.changedTouches[0].clientX - touchStartX.current
      const dy = e.changedTouches[0].clientY - touchStartY.current
      if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 50) {
        dx < 0 ? goNext() : goPrev()
      }
      touchStartX.current = null
      touchStartY.current = null
    }
    window.addEventListener('touchstart', handleTouchStart, { passive: true })
    window.addEventListener('touchend', handleTouchEnd, { passive: true })
    return () => {
      window.removeEventListener('touchstart', handleTouchStart)
      window.removeEventListener('touchend', handleTouchEnd)
    }
  }, [goNext, goPrev])

  return { activeIndex, goTo, goNext, goPrev }
}
