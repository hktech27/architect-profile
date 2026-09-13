// src/components/PdfModal/PdfModal.jsx
import React, { useEffect, useRef } from 'react'
import styles from './PdfModal.module.css'

export default function PdfModal({ url, title, onClose }) {
  const closeRef = useRef(null)

  useEffect(() => {
    closeRef.current?.focus()
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [onClose])

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
      >
        <div className={styles.dialogHeader}>
          <div className={styles.headerLeft}>
            <span className={styles.badge}>Architecture Diagram</span>
            <p className={styles.dialogTitle}>{title}</p>
          </div>
          <div className={styles.headerActions}>
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.openExternalBtn}
            >
              Open PDF ↗
            </a>
            <button
              ref={closeRef}
              className={styles.closeBtn}
              onClick={onClose}
              aria-label="Close modal"
            >
              ×
            </button>
          </div>
        </div>

        <div className={styles.pdfContainer}>
          <object
            data={url}
            type="application/pdf"
            className={styles.pdfViewer}
          >
            <div className={styles.fallbackBox}>
              <p>Your browser doesn't support inline PDF preview.</p>
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.openExternalBtn}
              >
                View / Download {title} PDF ↗
              </a>
            </div>
          </object>
        </div>
      </div>
    </div>
  )
}
