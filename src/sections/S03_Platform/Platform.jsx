// src/sections/S03_Platform/Platform.jsx
import React from 'react'
import styles from './Platform.module.css'

/* ── Sources — each carries its own diagram PDF path ── */
const sources = [
  { name: 'State Street',     note: null,                pdf: '/architect-profile/architecture/Statestreet.pdf' },
  { name: 'Burgiss',          note: null,                pdf: '/architect-profile/architecture/Burgiss.pdf' },
  { name: 'Speech Analytics', note: null,                pdf: '/architect-profile/architecture/Speech Analytics.pdf' },
  { name: 'Adobe',            note: null,                pdf: '/architect-profile/architecture/Adobe.pdf' },
  { name: 'JIRA',             note: null,                pdf: '/architect-profile/architecture/JIRA.pdf' },
  { name: 'Genesys AVA',      note: 'team contribution', pdf: '/architect-profile/architecture/Genesys AVA.pdf' },
]

const dataLayers = [
  { label: 'Enterprise sources', accent: false },
  { label: 'Ingestion',          accent: false },
  { label: 'Landing',            accent: false },
  { label: 'Raw',                accent: false },
  { label: 'Curated',            accent: true  },
  { label: 'Published',          accent: true  },
]

const decisions = [
  {
    id: 'restart',
    label: 'Selective restart',
    body: 'Operations needed individual processing paths to restart without rerunning the full pipeline.',
    takeaway: 'Operational control shaped the architecture.',
  },
  {
    id: 'scale',
    label: 'Scale constraint',
    body: 'Processing volume exceeded Lambda runtime limits, so heavier processing moved to Glue.',
    takeaway: 'Testing changed the architecture before production.',
  },
]

const platformCapabilities = [
  {
    id: 'tag',
    label: 'Tag governance',
    body: 'Configuration-driven automation to evaluate required tags, apply remediation and produce auditable results.',
  },
  {
    id: 'monitoring',
    label: 'Pipeline monitoring',
    body: 'Reusable monitoring for expected data arrivals, naming patterns and schedules across pipelines.',
  },
]

/* ── Screen ── */
export default function Platform({ isActive, onOpenPdf }) {
  return (
    <section
      id="platform"
      className={styles.section}
      aria-label="Cloud platform and architecture"
    >
      {/* ── Header ── */}
      <div className={styles.pageHeader}>
        <p className={styles.kicker}>03 — Cloud platform and architecture</p>
        <h2 className={styles.heading}>
          Building reusable AWS data architecture for enterprise workloads.
        </h2>
        <p className={styles.subheading}>
          Production pipelines, shared patterns and architecture decisions shaped by operational needs.
        </p>
      </div>

      {/* ── Body: three columns ── */}
      <div className={styles.body}>

        {/* ── Zone 1: Production architecture ── */}
        <div className={styles.zone}>
          <div className={styles.zoneLabelRow}>
            <p className={styles.zoneLabel}>Production architecture</p>
          </div>

          {/* Sources — each card opens its architecture diagram */}
          <div className={styles.sourcesBlock}>
            <div className={styles.blockMetaRow}>
              <p className={styles.blockMeta}>6 production data pipelines in AWS</p>
              <span className={styles.blockHint}>Architecture diagrams ↗</span>
            </div>
            <div className={styles.sourcesGrid}>
              {sources.map((src) => (
                <button
                  key={src.name}
                  className={styles.sourceCard}
                  onClick={() => onOpenPdf && onOpenPdf({ url: src.pdf, title: `${src.name} — Architecture Diagram` })}
                  title={`View ${src.name} architecture diagram`}
                >
                  <span className={styles.sourceDot} aria-hidden="true" />
                  <span className={styles.sourceName}>{src.name}</span>
                  <span className={styles.sourceRight}>
                    {src.note && <span className={styles.sourceNote}>{src.note}</span>}
                    <span className={styles.sourceDiagramIcon} aria-hidden="true">↗</span>
                  </span>
                </button>
              ))}
            </div>
            <p className={styles.sourcesFooter}>5 personally architected, 1 team contribution</p>
          </div>

          {/* Dark architecture band — single cohesive component */}
          <div className={styles.archBand}>
            <div className={styles.archBandFlow}>
              {dataLayers.map((layer, i) => (
                <React.Fragment key={layer.label}>
                  <span className={`${styles.archStage} ${layer.accent ? styles.archStageAccent : ''}`}>
                    {layer.label}
                  </span>
                  {i < dataLayers.length - 1 && (
                    <span className={styles.archArrow} aria-hidden="true">→</span>
                  )}
                </React.Fragment>
              ))}
            </div>
            <p className={styles.archBandCaption}>
              One reusable pattern across different enterprise data sources.
            </p>
            <p className={styles.archBandTakeaway}>
              The goal was not to build six different pipelines. It was to establish patterns the next pipeline could reuse.
            </p>
          </div>
        </div>

        {/* ── Zone 2: Architecture judgment ── */}
        <div className={styles.zone}>
          <div className={styles.zoneLabelRow}>
            <p className={styles.zoneLabel}>Architecture judgment</p>
          </div>
          <div className={styles.decisionsGrid}>
            {decisions.map((d) => (
              <div key={d.id} className={styles.decisionCard}>
                <p className={styles.decisionLabel}>{d.label}</p>
                <p className={styles.decisionBody}>{d.body}</p>
                <p className={styles.decisionTakeaway}>{d.takeaway}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ── Zone 3: Platform thinking ── */}
        <div className={styles.zone}>
          <div className={styles.zoneLabelRow}>
            <p className={styles.zoneLabel}>Platform thinking</p>
          </div>
          <div className={styles.capabilitiesGrid}>
            {platformCapabilities.map((cap) => (
              <div key={cap.id} className={styles.capabilityCard}>
                <p className={styles.capabilityLabel}>{cap.label}</p>
                <p className={styles.capabilityBody}>{cap.body}</p>
              </div>
            ))}
          </div>
        </div>

      </div>

    </section>
  )
}
