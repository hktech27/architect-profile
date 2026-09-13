// src/components/VideoModal/VideoModal.jsx
import React, { useEffect, useRef } from 'react'
import styles from './VideoModal.module.css'

/**
 * Modal for displaying a demo video.
 * url: YouTube/Vimeo embed URL or direct video URL.
 * title: accessible dialog title.
 * onClose: called when user closes the modal.
 */
export default function VideoModal({ url, title, onClose }) {
  const closeRef = useRef(null)

  // Focus trap and ESC key handler
  useEffect(() => {
    closeRef.current?.focus()

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [onClose])

  // Detect URL type
  const isVideo   = /\.(mp4|webm|ogg)(\?.*)?$/i.test(url)
  const isBoxLink = /box\.com\/s\//i.test(url)

  // Convert YouTube / Vimeo watch URLs to embed URLs
  const getEmbedUrl = (rawUrl) => {
    if (!rawUrl) return ''
    if (rawUrl.includes('embed')) return rawUrl
    const ytMatch = rawUrl.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&?/]+)/)
    if (ytMatch) return `https://www.youtube.com/embed/${ytMatch[1]}?autoplay=1`
    const vimeoMatch = rawUrl.match(/vimeo\.com\/(\d+)/)
    if (vimeoMatch) return `https://player.vimeo.com/video/${vimeoMatch[1]}?autoplay=1`
    return rawUrl
  }

  const embedUrl = getEmbedUrl(url)

  // Box share links open best in a new tab — open immediately and close modal
  if (isBoxLink) {
    window.open(url, '_blank', 'noopener,noreferrer')
    onClose()
    return null
  }

  return (
    <div
      className={styles.overlay}
      onClick={(e) => e.target === e.currentTarget && onClose()}
      role="presentation"
    >
      <div
        className={styles.dialog}
        role="dialog"
        aria-modal="true"
        aria-label={title}
        data-modal="true"
      >
        <div className={styles.dialogHeader}>
          <p className={styles.dialogTitle}>{title}</p>
          <button
            ref={closeRef}
            className={styles.closeBtn}
            onClick={onClose}
            aria-label="Close video"
          >
            ×
          </button>
        </div>

        {isVideo ? (
          <video
            src={url}
            controls
            autoPlay
            playsInline
            style={{ width: '100%', maxHeight: '500px', display: 'block', backgroundColor: '#000' }}
          />
        ) : (
          <div className={styles.iframeWrapper}>
            <iframe
              className={styles.iframe}
              src={embedUrl}
              title={title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        )}
      </div>
    </div>
  )
}
