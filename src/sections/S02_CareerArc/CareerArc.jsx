// src/sections/S02_CareerArc/CareerArc.jsx
import React, { useState } from 'react'
import { experience } from '../../data/experience.js'
import styles from './CareerArc.module.css'

const experienceDesc = [...experience].reverse()

/* ── Architect: vertical timeline chapters ── */
function ArchitectChapters({ chapters, evolution }) {
  return (
    <div className={styles.timeline}>
      {chapters.map((ch, i) => (
        <div key={ch.id} className={styles.timelineItem}>
          {/* Spine */}
          <div className={styles.timelineSpine} aria-hidden="true">
            <span className={styles.timelineNode} />
            {i < chapters.length - 1 && <span className={styles.timelineLine} />}
          </div>
          {/* Content */}
          <div className={styles.timelineContent}>
            <p className={styles.timelinePeriod}>{ch.period}</p>
            <h4 className={styles.timelineTitle}>{ch.title}</h4>
            <p className={styles.timelineBody}>{ch.body}</p>
            {ch.metric && (
              <p className={styles.metricCallout}>{ch.metric}</p>
            )}
            {ch.secondary && (
              <p className={styles.timelineSecondary}>{ch.secondary}</p>
            )}
          </div>
        </div>
      ))}

      {/* Evolution footer */}
      {evolution && (
        <div className={styles.evolutionStrip} aria-hidden="true">
          {evolution.map((step, i) => (
            <React.Fragment key={step}>
              <span className={styles.evolutionStep}>{step}</span>
              {i < evolution.length - 1 && (
                <span className={styles.evolutionArrow}>→</span>
              )}
            </React.Fragment>
          ))}
        </div>
      )}
    </div>
  )
}

/* ── Standard role detail panel ── */
function RoleDetail({ role }) {
  if (!role) return null

  return (
    <div className={styles.roleDetail} aria-live="polite" aria-atomic="true">
      <div className={styles.roleDetailBar} aria-hidden="true" />

      {/* Title + date */}
      <div className={styles.roleDetailTop}>
        <h3 className={styles.roleDetailTitle}>{role.title}</h3>
        <span className={styles.roleDetailPeriod}>{role.period}</span>
      </div>

      {/* Org */}
      <p className={styles.roleDetailOrg}>{role.org}</p>

      {/* Divider */}
      <hr className={styles.divider} aria-hidden="true" />

      {/* Positioning statement */}
      {role.positioning && (
        <p className={styles.positioning}>{role.positioning}</p>
      )}

      {/* Context line (below positioning) */}
      {role.context && (
        <p className={styles.roleDetailContext}>{role.context}</p>
      )}

      {/* Architect: vertical timeline */}
      {role.chapters ? (
        <ArchitectChapters chapters={role.chapters} evolution={role.evolution} />
      ) : (
        <>
          {/* Standard bullets */}
          <ul className={styles.bulletList}>
            {role.bullets.map((b, i) => (
              <li key={i} className={styles.bulletItem}>{b}</li>
            ))}
          </ul>

          {/* Proof strip */}
          {role.proofStrip && (
            <p className={styles.proofStrip}>{role.proofStrip.join('  ·  ')}</p>
          )}

          {/* Metric callout */}
          {role.metric && (
            <p className={styles.metricCallout}>{role.metric}</p>
          )}

          {/* Closing statement */}
          {role.closing && (
            <p className={styles.closingNote}>{role.closing}</p>
          )}
        </>
      )}
    </div>
  )
}

/* ── Screen ── */
export default function CareerArc({ isActive, goTo }) {
  const [selectedRole, setSelectedRole] = useState(experienceDesc[0].id)
  const selectedExp = experienceDesc.find((e) => e.id === selectedRole)

  const bandSteps = ['Build', 'Lead', 'Deliver', 'Transform', 'Architect + AI']
  const themeToIndex = { BUILD: 0, LEAD: 1, DELIVER: 2, TRANSFORM: 3, ARCHITECT: 4 }
  const activeBandIndex = themeToIndex[selectedExp?.theme] ?? bandSteps.length - 1

  return (
    <section
      id="career-arc"
      className={styles.section}
      aria-label="Career arc and enterprise transformation"
    >
      {/* Page header */}
      <div className={styles.pageHeader}>
        <p className={styles.kicker}>02 — Career arc &amp; enterprise transformation</p>
        <h2 className={styles.heading}>From engineering foundations to enterprise architecture</h2>
      </div>

      {/* Main layout */}
      <div className={styles.rolesLayout}>
        {/* Left nav */}
        <div className={styles.rolesList} role="list">
          {experienceDesc.map((item) => {
            const isSelected = item.id === selectedRole
            const isCurrent  = item.id === 'architect'
            return (
              <div
                key={item.id}
                className={`${styles.roleItem} ${isSelected ? styles.roleItemActive : ''} ${isCurrent ? styles.roleItemCurrent : ''}`}
                role="listitem"
                onClick={() => setSelectedRole(item.id)}
                tabIndex={0}
                onKeyDown={(e) => e.key === 'Enter' && setSelectedRole(item.id)}
                aria-pressed={isSelected}
              >
                <span className={styles.roleItemDot} />
                <div className={styles.roleItemBody}>
                  <p className={styles.roleItemPeriod}>{item.period}</p>
                  <p className={styles.roleItemTitle}>{item.title}</p>
                  {item.navProof && (
                    <p className={styles.roleItemProof}>{item.navProof}</p>
                  )}
                </div>
              </div>
            )
          })}
        </div>

        {/* Right panel */}
        <RoleDetail role={selectedExp} />
      </div>

      {/* Footer progression */}
      <div className={styles.progressionBand} aria-hidden="true">
        {bandSteps.map((step, i) => (
          <React.Fragment key={step}>
            <span className={`${styles.bandPill} ${i === activeBandIndex ? styles.bandPillActive : ''}`}>
              {step}
            </span>
            {i < bandSteps.length - 1 && (
              <span className={styles.bandArrow}>→</span>
            )}
          </React.Fragment>
        ))}
      </div>
    </section>
  )
}
