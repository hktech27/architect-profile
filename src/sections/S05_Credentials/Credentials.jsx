// src/sections/S05_Credentials/Credentials.jsx
import React from 'react'
import styles from './Credentials.module.css'

const selectedCredentials = [
  {
    name: 'IBM Generative & Agentic AI Architect',
    issuer: 'IBM',
    url: 'https://www.credly.com/badges/bb5e8fd3-7951-44d8-a81c-4067e7c5941e/public_url',
  },
  {
    name: 'IBM Generative & Agentic AI Consultant / Business Analyst',
    issuer: 'IBM',
    url: 'https://www.credly.com/badges/37dd80f1-24c9-4539-9079-c6fecc757c37/public_url',
  },
  {
    name: 'AWS Certified Solutions Architect – Associate',
    issuer: 'AWS',
    url: 'https://www.credly.com/badges/ad71a8fc-ddbb-481c-a400-963a6ad2c1f2/public_url',
  },
  {
    name: 'AWS Certified Cloud Practitioner',
    issuer: 'AWS',
    url: 'https://www.credly.com/badges/fd516abd-88ed-401a-aebd-52231612a8a7/public_url',
  },
  {
    name: 'Insurance Insights and Solutions (Silver)',
    issuer: 'IBM',
    url: 'https://www.credly.com/badges/bad5b6f0-6603-4aae-8ab9-b136066df69a/public_url',
  },
  {
    name: 'IBM Consulting – Core Experienced',
    issuer: 'IBM',
    url: 'https://www.credly.com/badges/b974f95a-a911-4aa3-9ef2-e5fb800f4593/public_url',
  },
  {
    name: 'IBM Associate Project Manager',
    issuer: 'IBM',
    url: 'https://www.credly.com/badges/b974f95a-a911-4aa3-9ef2-e5fb800f4593/public_url',
  },
  {
    name: 'Disciplined Agile Senior Scrum Master (DASSM)',
    issuer: 'PMI',
    url: 'https://www.credly.com/badges/48e7a92a-39a3-4111-af79-5ada0cf335a9/public_url',
  },
  {
    name: 'Certified ScrumMaster (CSM)',
    issuer: 'Scrum Alliance',
    url: 'https://certification.scrumalliance.org/accounts/717624/certifications/799743',
  },
  {
    name: 'ITIL Foundation Certificate in IT Service Management',
    issuer: 'ITIL',
    url: 'https://mylogin.exin.nl/?Script=GetLinkedInPost&CandidateCertificateGUID=4D1658C0-BBC9-410A-8A51-8FC017DCE7BF&ts=1296656078',
  },
  {
    name: 'Mainframe Application Services – Full Stack zOS Application Development',
    issuer: 'IBM',
    url: 'https://www.credly.com/badges/e0204f0e-f898-4827-a4be-c106edb3144e/public_url',
  },
]

const anchorDomains = [
  'Architecture',
  'Cloud',
  'AI',
  'Insurance',
  'Delivery',
]

export default function Credentials({ isActive, goTo }) {
  return (
    <section
      id="credentials"
      className={styles.section}
      aria-label="Credentials and accreditations"
    >
      {/* ── Page Header ── */}
      <div className={styles.pageHeader}>
        <p className={styles.kicker}>05 — Credentials &amp; Accreditations</p>
        <h2 className={styles.heading}>
          Validated across architecture, cloud, AI and delivery.
        </h2>
      </div>

      {/* ── Main Layout: Navy Anchor (30-35%) + Selected Credentials (65-70%) ── */}
      <div className={styles.mainLayout}>
        {/* ── Visual Anchor Panel ── */}
        <aside className={styles.anchorPanel}>
          <div className={styles.anchorTopBar} aria-hidden="true" />

          <p className={styles.anchorKicker}>Grounding</p>

          <div className={styles.domainList}>
            {anchorDomains.map((domain) => (
              <div key={domain} className={styles.domainItem}>
                <span className={styles.domainDot} aria-hidden="true" />
                <span className={styles.domainText}>{domain}</span>
              </div>
            ))}
          </div>

          <div className={styles.anchorStatement}>
            <p className={styles.anchorQuote}>
              Credentials that reinforce the work, not define it.
            </p>
          </div>
        </aside>

        {/* ── Selected Credentials Grid (Two Column) ── */}
        <div className={styles.credentialsContent}>
          <div className={styles.credentialsGrid}>
            {selectedCredentials.map((cred) => (
              <article key={cred.name} className={styles.credCard}>
                <div className={styles.credCardHeader}>
                  <h3 className={styles.credName}>{cred.name}</h3>
                </div>
                <div className={styles.credCardFooter}>
                  <span className={styles.issuerBadge}>{cred.issuer}</span>
                  {cred.url && (
                    <a
                      href={cred.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.verifyLink}
                      aria-label={`Verify on issuer site: ${cred.name}`}
                    >
                      Verify ↗
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
