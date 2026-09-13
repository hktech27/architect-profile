// src/sections/S06_AppliedAI/AppliedAI.jsx
import React from 'react'
import { aiProjects } from '../../data/aiProjects.js'
import styles from './AppliedAI.module.css'

const practicalWorkflows = [
  {
    id: 'rovo-architect',
    title: 'Senior Solution Architect Assistant',
    platform: 'Atlassian Rovo',
    positioning: 'Architecture Questions / Requirement Discovery',
    description:
      'Created a Rovo-based architecture assistant used when AWS work enters JIRA. It helps surface architecture and solutioning questions that should be clarified before implementation, improving requirement discovery early in the engineering lifecycle.',
    valueStatement: 'Architecture questions surfaced before implementation.',
    flow: ['JIRA AWS Work', 'Rovo Agent', 'Architecture Questions'],
    tags: ['Rovo', 'JIRA', 'AWS', 'Solution Architecture', 'Requirements'],
  },
  {
    id: 'rovo-project',
    title: 'Know Your Project',
    platform: 'Atlassian Rovo',
    positioning: 'Project Knowledge / Context Synthesis',
    description:
      'Created a Rovo agent that brings together project knowledge scattered across JIRA tasks and Confluence pages, allowing users to ask questions about work performed by the team and receive contextual AI-generated insights.',
    valueStatement: 'Turns scattered project history into accessible team knowledge.',
    flow: ['JIRA + Confluence', 'Rovo / Enterprise Context', 'AI Insight'],
    tags: ['Rovo', 'JIRA', 'Confluence', 'Enterprise Knowledge', 'Project Context'],
  },
  {
    id: 'iam-assistant',
    title: 'IAM Policy Assistant',
    platform: 'GitHub Copilot / VS Code',
    positioning: 'AI-Assisted Engineering / Cloud Security',
    description:
      'Created an AI-assisted workflow to draft least-privilege IAM policy JSON for Lambda repositories, giving developers a more secure starting point for IAM policy definition.',
    valueStatement: 'Least-privilege IAM draft as a starting point for review.',
    flow: ['Lambda Repo', 'GitHub Copilot', 'IAM Policy Draft'],
    tags: ['GitHub Copilot', 'AWS IAM', 'Lambda', 'Least Privilege', 'AI-Assisted Engineering'],
  },
]

export default function AppliedAI({ isActive, onOpenDemo, goTo }) {
  return (
    <section
      id="applied-ai"
      className={styles.section}
      aria-label="Applied AI & Practical Enterprise AI Workflows"
    >
      <div className={styles.header}>
        <div>
          <p className={styles.kicker}>06 — Applied AI & Enterprise Agents</p>
          <h2 className={styles.heading}>Turning AI concepts into working enterprise prototypes.</h2>
        </div>
        <div className={styles.headerRight}>
          <div className={styles.awardBanner}>
            <span className={styles.trophy}>🏆</span>
            <div className={styles.trophyText}>
              <span className={styles.trophyTitle}>1st Place Winner</span>
              <span className={styles.trophySub}>IBM Consulting ICA Bob-a-thon 2026</span>
            </div>
          </div>
          <button className={styles.homeBtn} onClick={() => goTo(0)} aria-label="Back to home">← Home</button>
        </div>
      </div>

      {/* ── Primary: Hackathon / Innovation Projects ── */}
      <div className={styles.cards}>
        {aiProjects.map((project) => (
          <article
            key={project.id}
            className={`${styles.card} ${project.highlight ? styles.featured : ''}`}
            aria-label={project.name}
          >
            {/* 16:9 media area */}
            <div
              className={styles.mediaArea}
              onClick={project.demoUrl ? () => onOpenDemo(project) : undefined}
              style={project.demoUrl ? { cursor: 'pointer' } : undefined}
              role={project.demoUrl ? 'button' : undefined}
              aria-label={project.demoUrl ? `Play demo: ${project.name}` : undefined}
              tabIndex={project.demoUrl ? 0 : undefined}
              onKeyDown={project.demoUrl ? (e) => e.key === 'Enter' && onOpenDemo(project) : undefined}
            >
              <div className={styles.mediaPlaceholder}>
                <span
                  className={styles.mediaIcon}
                  aria-hidden="true"
                  style={project.demoUrl ? { opacity: 0.9 } : undefined}
                >
                  ▶
                </span>
                <span className={styles.mediaLabel}>
                  {project.demoUrl ? 'Watch Live Solution Demo' : 'Demo Preview'}
                </span>
              </div>
              {project.achievement && (
                <div className={styles.achievementOverlay} aria-label={project.achievement}>
                  {project.achievement}
                </div>
              )}
            </div>

            {/* Card info */}
            <div className={styles.cardInfo}>
              <div className={styles.cardHeaderTop}>
                <span className={styles.event}>{project.event}</span>
                {project.team && <span className={styles.teamBadge}>{project.team}</span>}
              </div>

              <h3 className={styles.cardName}>{project.name}</h3>
              {project.tagline && (
                <p className={styles.tagline}>"{project.tagline}"</p>
              )}

              <p className={styles.description}>{project.description}</p>

              {project.executiveValue && (
                <div className={styles.valueCallout}>
                  <strong>Value:</strong> {project.executiveValue}
                </div>
              )}

              <div className={styles.tagGrid}>
                {project.tags.map((tag) => (
                  <span key={tag} className={styles.tagItem}>{tag}</span>
                ))}
              </div>

              <div className={styles.cardActions}>
                {project.demoUrl ? (
                  <button
                    className={styles.demoBtn}
                    onClick={() => onOpenDemo(project)}
                    aria-label={`Watch demo for ${project.name}`}
                  >
                    ▶ Watch Demo
                  </button>
                ) : (
                  <button
                    className={styles.demoBtn}
                    aria-label={`View solution: ${project.name}`}
                  >
                    View Solution
                  </button>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* ── Secondary: Practical AI in the Engineering Workflow ── */}
      <div className={styles.workflowsSection}>
        <div className={styles.workflowsHeader}>
          <span className={styles.workflowsLabel}>Practical AI in the Engineering Workflow</span>
          <span className={styles.workflowsNote}>AI applied to daily architecture, project knowledge and engineering work</span>
        </div>
        <div className={styles.workflowCards}>
          {practicalWorkflows.map((wf) => (
            <article key={wf.id} className={styles.workflowCard} aria-label={wf.title}>
              <div className={styles.wfTop}>
                <span className={styles.wfPlatform}>{wf.platform}</span>
                <span className={styles.wfPositioning}>{wf.positioning}</span>
              </div>
              <h4 className={styles.wfTitle}>{wf.title}</h4>
              {/* Mini flow */}
              <div className={styles.wfFlow} aria-hidden="true">
                {wf.flow.map((step, i) => (
                  <span key={i} className={styles.wfFlowRow}>
                    <span className={styles.wfFlowStep}>{step}</span>
                    {i < wf.flow.length - 1 && <span className={styles.wfFlowArrow}>→</span>}
                  </span>
                ))}
              </div>
              <p className={styles.wfDescription}>{wf.description}</p>
              {wf.valueStatement && (
                <p className={styles.wfValue}>"{wf.valueStatement}"</p>
              )}
              <div className={styles.wfTags}>
                {wf.tags.map((tag) => (
                  <span key={tag} className={styles.wfTag}>{tag}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* ── Closing ── */}
      <div className={styles.closingBlock}>
        <p className={styles.closing}>
          "From hackathon innovation to AI embedded in everyday architecture and engineering workflows."
        </p>
        <p className={styles.closingSub}>
          Exploring how AI can support technical decisions, enterprise context and secure engineering without removing human review.
        </p>
      </div>
    </section>
  )
}
