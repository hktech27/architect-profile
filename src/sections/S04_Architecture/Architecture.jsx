// src/sections/S04_Architecture/Architecture.jsx
import React, { useState } from 'react'
import { architectureCases } from '../../data/architectureCases.js'
import styles from './Architecture.module.css'

function CaseCard({ item, isSelected, onSelect, onOpenPdf }) {
  const [activeTab, setActiveTab] = useState('flow') // 'flow' | 'tradeoff' | 'problem'

  return (
    <article
      className={`${styles.card} ${isSelected ? styles.cardActive : ''}`}
      aria-label={`Architecture case: ${item.title}`}
      onClick={onSelect}
    >
      {/* Card Header */}
      <div className={styles.cardHeader}>
        <div className={styles.headerTopLine}>
          <span className={styles.contextPill}>{item.context}</span>
          {item.pdfPath && (
            <button
              className={styles.pdfBadgeBtn}
              onClick={(e) => {
                e.stopPropagation()
                onOpenPdf && onOpenPdf({ url: item.pdfPath, title: `${item.title} — Architecture Diagram` })
              }}
              title="Open verified architecture diagram PDF"
            >
              📄 Diagram PDF ↗
            </button>
          )}
        </div>
        <h3 className={styles.cardTitle}>{item.title}</h3>
        <p className={styles.executiveWhy}>
          <strong>Impact:</strong> {item.executiveWhy}
        </p>
      </div>

      {/* Interactive Tabs */}
      <div className={styles.tabNav} onClick={(e) => e.stopPropagation()}>
        <button
          className={`${styles.tabBtn} ${activeTab === 'flow' ? styles.tabBtnActive : ''}`}
          onClick={() => setActiveTab('flow')}
        >
          Flow Architecture
        </button>
        <button
          className={`${styles.tabBtn} ${activeTab === 'tradeoff' ? styles.tabBtnActive : ''}`}
          onClick={() => setActiveTab('tradeoff')}
        >
          Architectural Decisions
        </button>
        <button
          className={`${styles.tabBtn} ${activeTab === 'problem' ? styles.tabBtnActive : ''}`}
          onClick={() => setActiveTab('problem')}
        >
          Context & Solution
        </button>
      </div>

      {/* Tab Content Container */}
      <div className={styles.tabBody}>
        {activeTab === 'flow' && (
          <div className={styles.flowContainer}>
            <div className={styles.flowTimeline}>
              {item.architectureFlow.map((stepObj, idx) => (
                <div
                  key={idx}
                  className={`${styles.flowNode} ${stepObj.highlight ? styles.flowNodeHighlight : ''}`}
                >
                  <div className={styles.flowNodeBadge}>{idx + 1}</div>
                  <div className={styles.flowNodeText}>
                    <span className={styles.flowNodeStep}>{stepObj.step}</span>
                    <span className={styles.flowNodeDesc}>{stepObj.desc}</span>
                  </div>
                </div>
              ))}
            </div>
            <div className={styles.techTagsRow}>
              {item.techStack.map((tech) => (
                <span key={tech} className={styles.techTag}>{tech}</span>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'tradeoff' && (
          <div className={styles.tradeoffContainer}>
            <p className={styles.tradeoffHeading}>Options Considered & Trade-Offs:</p>
            {item.tradeoffs.map((t, idx) => (
              <div key={idx} className={styles.tradeoffItem}>
                <span className={styles.tradeoffOption}>{t.option}</span>
                <span className={styles.tradeoffVerdict}>{t.verdict}</span>
              </div>
            ))}
            <div className={styles.keyMessageCallout}>
              <strong>Key Architectural Takeaway:</strong> {item.keyMessage}
            </div>
          </div>
        )}

        {activeTab === 'problem' && (
          <div className={styles.problemContainer}>
            <div className={styles.problemBlock}>
              <span className={styles.blockLabel}>The Reality / Problem:</span>
              <p className={styles.blockContent}>{item.problem}</p>
            </div>
            <div className={styles.solutionBlock}>
              <span className={styles.blockLabel}>Architectural Decision & Outcome:</span>
              <p className={styles.blockContent}>{item.decision}</p>
            </div>
          </div>
        )}
      </div>

      {/* Card Footer Quote */}
      <div className={styles.cardFooter}>
        <span className={styles.decisionNote}>💡 {item.decisionNote}</span>
      </div>
    </article>
  )
}

export default function Architecture({ isActive, onOpenPdf, goTo }) {
  const [selectedCase, setSelectedCase] = useState(architectureCases[0].id)

  return (
    <section
      id="architecture"
      className={styles.section}
      aria-label="Architecture case studies and tradeoff evaluations"
    >
      <div className={styles.header}>
        <div>
          <p className={styles.kicker}>04 — Architecture Patterns in Production</p>
          <h2 className={styles.heading}>Designing for Operational Reality over Dogma.</h2>
        </div>
        <div className={styles.headerRight}>
          <div className={styles.headerPdfHint}>
            <span>💡 Click "Diagram PDF ↗" on any case to view full Open Architecture spec</span>
          </div>
          <button className={styles.homeBtn} onClick={() => goTo(0)} aria-label="Back to home">← Home</button>
        </div>
      </div>

      <div className={styles.cardsRow}>
        {architectureCases.map((item) => (
          <CaseCard
            key={item.id}
            item={item}
            isSelected={selectedCase === item.id}
            onSelect={() => setSelectedCase(item.id)}
            onOpenPdf={onOpenPdf}
          />
        ))}
      </div>

      <div className={styles.quoteBar}>
        <p className={styles.quote}>
          <strong>"Architecture is knowing the standard patterns."</strong>{' '}
          Good architecture is knowing when operational constraints demand something different.
        </p>
      </div>
    </section>
  )
}
