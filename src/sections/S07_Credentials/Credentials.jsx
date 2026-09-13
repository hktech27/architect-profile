// src/sections/S07_Credentials/Credentials.jsx
import React from 'react'
import { certificationGroups } from '../../data/certifications.js'
import styles from './Credentials.module.css'

export default function Credentials({ isActive, goTo }) {
  return (
    <section
      id="credentials"
      className={styles.section}
      aria-label="Credentials and certifications"
    >
      <div className={styles.header}>
        <div>
          <p className={styles.kicker}>07 — Credentials & Accreditations</p>
          <h2 className={styles.heading}>Credentials across Architecture, Cloud, AI &amp; Delivery.</h2>
        </div>
        <div className={styles.headerRight}>
          <div className={styles.credBadge}>
            <span>Credly & Industry Verified</span>
          </div>
          <button className={styles.homeBtn} onClick={() => goTo(0)} aria-label="Back to home">← Home</button>
        </div>
      </div>

      <div className={styles.groups}>
        {certificationGroups.map((group) => (
          <div key={group.id} className={styles.group}>
            <div className={styles.groupHeader}>
              <p className={styles.groupLabel}>{group.group}</p>
              <span className={styles.issuerTag}>{group.items.length} Credentials</span>
            </div>
            <div className={styles.itemsList}>
              {group.items.map((item) => (
                <div key={item.name} className={styles.credRow}>
                  <div className={styles.credMain}>
                    <span className={styles.badgeDot}>◆</span>
                    <span className={styles.credName}>{item.name}</span>
                  </div>
                  <div className={styles.credMeta}>
                    <span className={styles.issuerBadge}>{item.issuer}</span>
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.verifyLink}
                      aria-label={`Verify on issuer site: ${item.name}`}
                    >
                      Verify ↗
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className={styles.footerNote}>
        <p>Continuous commitment to professional rigor, architecture standards, and emerging AI technologies.</p>
      </div>
    </section>
  )
}
