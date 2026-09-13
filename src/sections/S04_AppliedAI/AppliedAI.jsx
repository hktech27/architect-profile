// src/sections/S04_AppliedAI/AppliedAI.jsx
import React from 'react'
import styles from './AppliedAI.module.css'

export default function AppliedAI({ isActive, onOpenDemo, goTo }) {
  // Hardcoded project details and links as specified in the instructions
  const heroProject = {
    id: 'preclaimiq',
    name: 'PreClaimIQ',
    context: 'IBM Consulting ICA Bob a thon 2026',
    achievement: '1st Place',
    description: 'Agentic insurance workflow combining specialized AI agents with enterprise context to support pre claim analysis.',
    demoUrl: 'https://ibm.box.com/s/bvb03e5jmftfifw1ar7s64vy5huzf2ie',
    workflow: [
      'Insurance context',
      'Specialized agents',
      'Analysis',
      'Human decision'
    ]
  }

  const supportingProjects = [
    {
      id: 'coveriq',
      name: 'CoverIQ++',
      description: 'AI assisted interpretation of commercial insurance policy language.',
      achievement: 'Top 20 · Frontier Forge Buildathon 2026',
      demoUrl: 'https://ibm.box.com/s/8medjsg1ubypu82m3e1u5gns6uaj7fx2'
    },
    {
      id: 'br-impactlens',
      name: 'BR Impact Lens',
      description: 'AI workflow for tracing the downstream impact of insurance business rule changes.',
      achievement: 'watsonx Challenge 2026',
      demoUrl: 'https://ibm.box.com/s/ljaqqqrpacd45tk787foepesi4uhybiz'
    }
  ]

  const practicalWorkflows = [
    {
      id: 'rovo-architect',
      title: 'Architecture assistant',
      description: 'Rovo surfaces architecture and solution questions from AWS work in JIRA.'
    },
    {
      id: 'rovo-project',
      title: 'Project knowledge',
      description: 'Rovo connects JIRA and Confluence context for project questions.'
    },
    {
      id: 'iam-assistant',
      title: 'IAM policy assistant',
      description: 'GitHub Copilot creates a least privilege IAM policy starting point for Lambda repositories.'
    }
  ]

  const handleDemoClick = (project) => {
    if (onOpenDemo && project.demoUrl) {
      onOpenDemo({
        id: project.id,
        name: project.name,
        demoUrl: project.demoUrl
      })
    }
  }

  return (
    <section
      id="applied-ai"
      className={styles.section}
      aria-label="Applied AI"
    >
      {/* PAGE HEADER */}
      <div className={styles.pageHeader}>
        <p className={styles.kicker}>04 — Applied AI</p>
        <h2 className={styles.heading}>Building AI fluency through enterprise prototypes and practice.</h2>
        <p className={styles.subheading}>
          Award-winning prototypes and AI embedded into everyday architecture and engineering work.
        </p>
      </div>

      {/* TWO-COLUMN LAYOUT */}
      <div className={styles.mainLayout}>
        
        {/* LEFT COLUMN: 52% width - Hero Panel */}
        <div className={styles.leftColumn}>
          <article className={`${styles.card} ${styles.featured} ${styles.heroPanel}`}>
            {/* Dark indicator line like the original featured card */}
            <div className={styles.heroTopBar} />

            <div className={styles.heroHeader}>
              <span className={styles.heroContext}>{heroProject.context}</span>
              <span className={styles.heroGoldBadge}>{heroProject.achievement}</span>
            </div>

            <div className={styles.heroBody}>
              <h3 className={styles.heroTitle}>{heroProject.name}</h3>
              <p className={styles.heroDescription}>{heroProject.description}</p>
            </div>

            {/* AI Workflow visually displayed inside dark panel */}
            <div className={styles.workflowBlock}>
              <div className={styles.workflowSteps}>
                {heroProject.workflow.map((step, i) => (
                  <React.Fragment key={step}>
                    <div className={styles.workflowStepCard}>
                      <span className={styles.workflowStepText}>{step}</span>
                    </div>
                    {i < heroProject.workflow.length - 1 && (
                      <span className={styles.workflowArrow} aria-hidden="true">→</span>
                    )}
                  </React.Fragment>
                ))}
              </div>
              <p className={styles.workflowNote}>
                Multiple specialized agents working with shared enterprise context.
              </p>
            </div>

            <div className={styles.heroActions}>
              {heroProject.demoUrl && (
                <button
                  className={styles.compactDemoBtn}
                  onClick={() => handleDemoClick(heroProject)}
                  aria-label={`Watch demo for ${heroProject.name}`}
                >
                  View demo ↗
                </button>
              )}
            </div>
          </article>
        </div>

        {/* RIGHT COLUMN: 48% width - Two Lightweight Sections */}
        <div className={styles.rightColumn}>
          
          {/* RIGHT TOP: Other AI prototypes */}
          <div className={styles.rightSection}>
            <h4 className={styles.sectionTitle}>Other AI prototypes</h4>
            <div className={styles.lightContainer}>
              {supportingProjects.map((project, i) => (
                <React.Fragment key={project.id}>
                  <div className={styles.projectRow}>
                    <div className={styles.projectRowHeader}>
                      <div className={styles.projectTitleCol}>
                        <h5 className={styles.projectTitle}>{project.name}</h5>
                        <span className={styles.projectContext}>{project.achievement}</span>
                      </div>
                      {project.demoUrl && (
                        <button
                          className={styles.rowDemoBtn}
                          onClick={() => handleDemoClick(project)}
                          aria-label={`Watch demo for ${project.name}`}
                        >
                          Demo ↗
                        </button>
                      )}
                    </div>
                    <p className={styles.projectDescription}>{project.description}</p>
                  </div>
                  {i < supportingProjects.length - 1 && (
                    <hr className={styles.rowDivider} />
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* RIGHT BOTTOM: AI in my work */}
          <div className={styles.rightSection}>
            <h4 className={styles.sectionTitle}>AI in my work</h4>
            <div className={styles.lightContainer}>
              <div className={styles.everydayList}>
                {practicalWorkflows.map((item) => (
                  <div key={item.id} className={styles.everydayItem}>
                    <div className={styles.everydayHeader}>
                      <span className={styles.blueDot} aria-hidden="true" />
                      <h5 className={styles.everydayItemTitle}>{item.title}</h5>
                    </div>
                    <p className={styles.everydayItemDescription}>{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* STATEMENT BAR (Visually echoes Screens 02 & 03) */}
      <footer className={styles.statementBar}>
        <p className={styles.statementText}>
          My intent is AI that becomes part of how teams work. I am building toward that through prototypes, agents and practice.
        </p>
      </footer>
    </section>
  )
}
