// src/sections/S01_Introduction/Introduction.jsx
import React from 'react'
import { siteConfig } from '../../data/config.js'
import styles from './Introduction.module.css'

// Reverse chronology: current positioning first, foundation last.
// dot = display number/star; tier = visual weight class (0=highest)
// roleId matches experience.js ids so CareerArc can pre-select the right entry
const progressionSteps = [
  { label: 'Architecture + AI', subtitle: 'Agentic AI · Enterprise Workflows', dot: '★', tier: 0, roleId: 'architect'       },
  { label: 'Architect',         subtitle: 'Modernization · Cloud · Data',       dot: '5', tier: 1, roleId: 'architect'       },
  { label: 'Transform',         subtitle: '$5M Program Portfolio',              dot: '4', tier: 2, roleId: 'program-mgr'     },
  { label: 'Deliver',           subtitle: 'Technical PM & Project Delivery',    dot: '3', tier: 3, roleId: 'tech-pm'         },
  { label: 'Lead',              subtitle: 'Guidewire & Data Conversion',        dot: '2', tier: 4, roleId: 'tech-lead'       },
  { label: 'Build',             subtitle: 'Mainframe & Enterprise Engineering', dot: '1', tier: 5, roleId: 'eng-foundation'  },
]

export default function Introduction({ isActive, goTo, onGoToCareer }) {
  return (
    <section
      id="profile"
      className={styles.section}
      aria-label="Executive Profile"
    >
      {/* Left: editorial typography & executive value statement */}
      <div className={styles.left}>
        <div className={styles.badgeRow}>
          <span className={styles.pillIBM}>IBM Consulting</span>
          <span className={styles.pillRole}>Application Architect</span>
          <span className={styles.pillStatus}>Technical Leadership</span>
        </div>

        <h1 className={styles.name}>{siteConfig.name}</h1>
        <p className={styles.subtitle}>{siteConfig.roleSubtitle}</p>
        <p className={styles.tagline}>{siteConfig.tagline}</p>

        <div className={styles.metrics} aria-label="Key Executive Metrics">
          {siteConfig.executiveStats.map((stat) => (
            <div key={stat.label} className={styles.metricCard}>
              <div className={`${styles.metricValue}${stat.value === '1st Place' ? ` ${styles.metricValueSm}` : ''}`}>{stat.value}</div>
              <div className={styles.metricLabel}>{stat.label}</div>
              <div className={styles.metricDetail}>{stat.detail}</div>
            </div>
          ))}
        </div>

        <div className={styles.ctas}>
          <button
            className={styles.btnPrimary}
            onClick={() => goTo(1)}
            aria-label="Explore career arc"
          >
            Explore Career Arc →
          </button>
          <button
            className={styles.btnSecondary}
            onClick={() => goTo(6)}
            aria-label="View where Himanshu adds value"
          >
            Where I Add Value ↗
          </button>
        </div>
      </div>

      {/* Right: dark panel with career progression arc */}
      <div className={styles.right}>
        <div className={styles.rightInner}>
          <div className={styles.arcHeader}>
            <p className={styles.arcLabel}>How I Got Here</p>
            <span className={styles.arcBadge}>19+ Years Track Record</span>
          </div>

          <div className={styles.quoteBox}>
            <p className={styles.quote}>
              "Engineering depth shaped my architecture. Delivery leadership taught me how to make it work in the enterprise. AI is expanding what I can build next."
            </p>
          </div>

          <div className={styles.progression}>
            {progressionSteps.map((step) => (
              <div
                key={step.label}
                className={`${styles.progStep} ${styles[`progTier${step.tier}`]}`}
                onClick={() => onGoToCareer(step.roleId)}
                style={{ cursor: 'pointer' }}
                title={`View ${step.label} in Career Arc`}
              >
                <span className={`${styles.progDot} ${step.tier === 0 ? styles.progDotStar : ''}`}>
                  {step.dot}
                </span>
                <div className={styles.progText}>
                  <span className={styles.progLabel}>{step.label}</span>
                  <span className={styles.progSub}>{step.subtitle}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
