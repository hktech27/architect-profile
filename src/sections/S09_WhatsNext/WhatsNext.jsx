// src/sections/S09_WhatsNext/WhatsNext.jsx
import React from 'react'
import { siteConfig } from '../../data/config.js'
import ResumeButton from '../../components/ResumeButton/ResumeButton.jsx'
import styles from './WhatsNext.module.css'

const valueDimensions = [
  {
    role: 'Architecture & Transformation',
    tag: 'Legacy depth → Modern architecture',
    benefits: [
      'Connects deep legacy-system understanding with cloud, data and modernization architecture.',
      'Makes architecture decisions around real operational constraints rather than technology preference alone.',
      'Experience spans Guidewire conversions, mainframe retirement, financial-system modernization and AWS data architecture.',
    ]
  },
  {
    role: 'Delivery & Technical Leadership',
    tag: 'Architecture that teams can execute',
    benefits: [
      'Career progression spans engineer, technical lead, technical project manager, project manager, program manager and application architect.',
      'Managed a $5M portfolio while balancing delivery, governance, risk, budget and stakeholder priorities.',
      'Helps technical teams and management understand trade-offs and move toward practical decisions.',
    ]
  },
  {
    role: 'Applied AI',
    tag: 'Enterprise context → Practical AI workflows',
    benefits: [
      'Building hands-on capability across Agentic AI, enterprise context, Rovo, GitHub Copilot and AI-assisted engineering workflows.',
      '1st Place winner in IBM Consulting ICA Bob-a-thon 2026.',
      'Created practical AI assistants for solution architecture, project knowledge and least-privilege IAM policy drafting.',
    ]
  }
]

export default function WhatsNext({ isActive, goTo }) {
  const { links } = siteConfig

  return (
    <section
      id="whats-next"
      className={styles.section}
      aria-label="Where Himanshu R Khatri creates value"
    >
      <div className={styles.header}>
        <div>
          <p className={styles.kicker}>09 — Executive Value</p>
          <h2 className={styles.heading}>Where I Create the Most Value.</h2>
        </div>
        <div className={styles.headerRight}>
          <button className={styles.homeBtn} onClick={() => goTo(0)} aria-label="Back to home">← Home</button>
        </div>
      </div>

      {/* 3 Value Pillars */}
      <div className={styles.valueGrid}>
        {valueDimensions.map((dim) => (
          <div key={dim.role} className={styles.valueCard}>
            <div className={styles.cardHeader}>
              <h3 className={styles.roleTitle}>{dim.role}</h3>
              <span className={styles.roleTag}>{dim.tag}</span>
            </div>
            <ul className={styles.benefitsList}>
              {dim.benefits.map((b, i) => (
                <li key={i} className={styles.benefitItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className={styles.callToActionRow}>
        <div className={styles.aspirationBox}>
          <p className={styles.aspiration}>
            Best fit: complex enterprise engagements where architecture, modernization, delivery leadership and emerging AI intersect.
          </p>
        </div>

        <div className={styles.footerActions}>
          <a
            href={links.email}
            className={styles.btnPrimary}
            aria-label="Connect with Himanshu R Khatri via Email"
          >
            Start a Conversation ↗
          </a>
          <a href={links.linkedin} target="_blank" rel="noopener noreferrer" className={styles.footerLink} aria-label="LinkedIn">LinkedIn ↗</a>
          <ResumeButton variant="primary" label="Download Resume ↓" />
        </div>
      </div>
    </section>
  )
}
