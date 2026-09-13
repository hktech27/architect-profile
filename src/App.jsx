// src/App.jsx
import React, { useState, useEffect } from 'react'
import { useNavigation } from './hooks/useNavigation.js'
import Header from './components/Header/Header.jsx'
import PageIndicator from './components/PageIndicator/PageIndicator.jsx'
import VideoModal from './components/VideoModal/VideoModal.jsx'
import PdfModal from './components/PdfModal/PdfModal.jsx'

import Introduction from './sections/S01_Introduction/Introduction.jsx'
import CareerArc    from './sections/S02_CareerArc/CareerArc.jsx'
import Platform     from './sections/S03_Platform/Platform.jsx'
import AppliedAI    from './sections/S04_AppliedAI/AppliedAI.jsx'
import Credentials  from './sections/S05_Credentials/Credentials.jsx'
import Leadership   from './sections/S06_Leadership/Leadership.jsx'
import WhatsNext    from './sections/S07_WhatsNext/WhatsNext.jsx'

import styles from './App.module.css'

const sections = [
  Introduction,
  CareerArc,
  Platform,
  AppliedAI,
  Credentials,
  Leadership,
  WhatsNext,
]

export default function App() {
  const { activeIndex, goTo, goNext, goPrev } = useNavigation()
  const [demoProject, setDemoProject]   = useState(null)
  const [activePdf, setActivePdf]       = useState(null)
  const [isDark, setIsDark]             = useState(false)
  const [careerRoleId, setCareerRoleId] = useState(null)

  // Apply / remove dark theme on <html>
  useEffect(() => {
    const html = document.documentElement
    if (isDark) {
      html.setAttribute('data-theme', 'dark')
    } else {
      html.removeAttribute('data-theme')
    }
  }, [isDark])

  const toggleTheme = () => setIsDark((d) => !d)

  const goToCareer = (roleId) => {
    setCareerRoleId(roleId)
    goTo(1)
  }

  const sectionProps = (index) => ({
    isActive:    activeIndex === index,
    goTo,
    goNext,
    goPrev,
    isDark,
    onOpenPdf:   setActivePdf,
    ...(index === 0 ? { onGoToCareer: goToCareer } : {}),
    ...(index === 1 ? { initialRoleId: careerRoleId } : {}),
    ...(index === 3 ? { onOpenDemo: setDemoProject } : {}),
  })

  return (
    <div className={styles.app}>
      <Header
        activeIndex={activeIndex}
        goTo={goTo}
        isDark={isDark}
        onToggleTheme={toggleTheme}
      />

      {/* Desktop: horizontal slide container */}
      <div
        className={styles.slideContainer}
        style={{ transform: `translateX(-${activeIndex * 100}vw)` }}
        aria-label="Section content"
      >
        {sections.map((SectionComponent, index) => (
          <SectionComponent
            key={index}
            {...sectionProps(index)}
          />
        ))}
      </div>

      {/* Mobile: sections flow vertically */}
      <div className={styles.mobileContainer} aria-label="Section content">
        {sections.map((SectionComponent, index) => (
          <SectionComponent
            key={`m-${index}`}
            {...sectionProps(index)}
            isActive={true}
          />
        ))}
      </div>

      {/* Modals — outside the CSS transform container */}
      {demoProject && (
        <VideoModal
          url={demoProject.demoUrl}
          title={`${demoProject.name} Demo`}
          onClose={() => setDemoProject(null)}
        />
      )}

      {activePdf && (
        <PdfModal
          url={activePdf.url}
          title={activePdf.title}
          onClose={() => setActivePdf(null)}
        />
      )}

      <PageIndicator
        activeIndex={activeIndex}
        goTo={goTo}
        goPrev={goPrev}
        goNext={goNext}
      />
    </div>
  )
}
