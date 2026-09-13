// src/sections/S03_Building/Building.jsx
import React from 'react'
import { productionPipelines, tagGovernance, dpms } from '../../data/currentSolutions.js'
import styles from './Building.module.css'

const dataLayers = [
  { label: 'Enterprise Sources', accent: false },
  { label: 'Ingestion', accent: false },
  { label: 'Landing / Stage', accent: false },
  { label: 'Raw', accent: false },
  { label: 'Curated', accent: true },
  { label: 'Published', accent: true },
  { label: 'Consumers / Analytics', accent: false },
]

function MiniFlow({ steps }) {
  return (
    <div className={styles.miniFlow}>
      {steps.slice(0, 5).map((step, i) => (
        <React.Fragment key={i}>
          <span className={styles.miniStep}>{step}</span>
          {i < Math.min(steps.length - 1, 4) && (
            <span className={styles.miniArrow} aria-hidden="true">→</span>
          )}
        </React.Fragment>
      ))}
      {steps.length > 5 && <span className={styles.miniArrow}>…</span>}
    </div>
  )
}

export default function Building({ isActive, onOpenPdf, goTo }) {
  return (
    <section id="building" className={styles.section} aria-label="What I'm building">
      <div className={styles.header}>
        <div className={styles.headerText}>
          <p className={styles.kicker}>03 — Enterprise Cloud & Data Platform</p>
          <h2 className={styles.heading}>Reusable cloud data architecture powering 5 enterprise pipelines.</h2>
        </div>
        <div className={styles.headerRight}>
          <div className={styles.platformBadge}>
            <span className={styles.badgeHighlight}>AWS Serverless + Glue Lakehouse</span>
            <span className={styles.badgeSub}>Enterprise Standard</span>
          </div>
          <button className={styles.homeBtn} onClick={() => goTo(0)} aria-label="Back to home">← Home</button>
        </div>
      </div>

      {/* Central platform diagram */}
      <div className={styles.platformRow} aria-label="Data platform architecture">
        {/* Sources with direct PDF diagram triggers */}
        <div className={styles.sourcesCol}>
          <div className={styles.colHeader}>
            <p className={styles.colLabel}>Data Sources / Integrations</p>
            <span className={styles.countPill}>6 Architecture Diagrams</span>
          </div>
          <div className={styles.sourceGrid}>
            {productionPipelines.sources.map((src) => (
              <button
                key={src.name}
                className={styles.sourceChipBtn}
                onClick={() => onOpenPdf && onOpenPdf({ url: src.pdf, title: `${src.name} Architecture Diagram` })}
                title={`Click to view ${src.name} Architecture Diagram PDF`}
              >
                <div className={styles.sourceInfo}>
                  <span className={styles.sourceDot}>●</span>
                  <span className={styles.sourceName}>{src.name}</span>
                </div>
                <span className={styles.pdfIcon}>PDF ↗</span>
              </button>
            ))}
            {/* Genesys AVA — team architecture */}
            <button
              className={styles.sourceChipBtn}
              onClick={() => onOpenPdf && onOpenPdf({ url: '/architect-profile/architecture/Genesys AVA.pdf', title: 'Genesys AVA — Architecture Diagram' })}
              title="Click to view Genesys AVA Architecture Diagram PDF"
            >
              <div className={styles.sourceInfo}>
                <span className={styles.sourceDot}>●</span>
                <span className={styles.sourceName}>Genesys AVA</span>
              </div>
              <span className={styles.pdfIcon}>PDF ↗</span>
            </button>
          </div>
          <p className={styles.sourceNote}>5 personally architected · Genesys AVA team contribution</p>
        </div>

        {/* Architecture layers */}
        <div className={styles.archCol}>
          <div className={styles.colHeader}>
            <p className={styles.colLabel}>Common Medallion Architecture</p>
            <span className={styles.techPill}>S3 + Glue + Step Functions</span>
          </div>
          <div className={styles.archLayers}>
            {dataLayers.map((layer, i) => (
              <React.Fragment key={layer.label}>
                <div className={styles.archLayer}>
                  <div className={`${styles.layerBar} ${layer.accent ? styles.layerAccent : ''}`}>
                    <span className={styles.layerIndex}>L{i+1}</span>
                    <span className={styles.layerName}>{layer.label}</span>
                  </div>
                </div>
                {i < dataLayers.length - 1 && (
                  <div className={styles.layerArrow} aria-hidden="true" />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Consumers */}
        <div className={styles.consumersCol}>
          <div className={styles.colHeader}>
            <p className={styles.colLabel}>Downstream Value</p>
            <span className={styles.countPill}>BI & AI</span>
          </div>
          <div className={styles.consumerGrid}>
            {['Enterprise Analytics', 'Executive Dashboards', 'Actuarial & Claims AI'].map((c) => (
              <div key={c} className={styles.consumerChip}>
                <span className={styles.consumerIcon}>⚡</span> {c}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Tag Governance + DPMS panels */}
      <div className={styles.bottomRow}>
        {/* Tag Governance */}
        <div className={styles.panel}>
          <div className={styles.panelHeader}>
            <div>
              <p className={styles.panelTitle}>{tagGovernance.heading}</p>
              <span className={styles.ownerBadge}>INDEPENDENT INITIATIVE · DESIGNED &amp; DEVELOPED BY HIMANSHU</span>
            </div>
            <span className={`${styles.statusBadge} ${styles.delivered}`}>✓ DELIVERED TO PRODUCTION</span>
          </div>
          <p className={styles.panelBody}>
            Identified a cloud governance gap and designed a configuration-driven Lambda solution to evaluate required tags, apply supported remediation, and generate an auditable JSON summary.
          </p>
          <MiniFlow steps={tagGovernance.flow} />
        </div>

        {/* DPMS */}
        <div className={styles.panel}>
          <div className={styles.panelHeader}>
            <div>
              <p className={styles.panelTitle}>{dpms.heading}</p>
              <span className={styles.ownerBadge}>TEAM INITIATIVE · ARCHITECTURE CONTRIBUTION</span>
            </div>
            <span className={`${styles.statusBadge} ${styles.inDev}`}>⚡ IN ACTIVE DEVELOPMENT / ROLLOUT</span>
          </div>
          <p className={styles.panelBody}>
            Contributed the configuration model used to define expected vendor/file arrivals, naming/date patterns, schedules and monitoring rules for centralized pipeline monitoring (<span className={styles.codePill}>config.json</span>).
          </p>
          <MiniFlow steps={dpms.flow} />
        </div>
      </div>
    </section>
  )
}
