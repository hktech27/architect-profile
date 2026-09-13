/**
 * src/data/experience.js
 *
 * Career timeline entries for Screen 02 — Career Arc.
 * Stored oldest-first; CareerArc.jsx reverses for display.
 */

export const experience = [
  {
    id: 'eng-foundation',
    period: '2006 to 2014',
    title: 'Engineering Foundation',
    org: 'Aetna | AmerisourceBergen',
    theme: 'BUILD',
    positioning: 'Where the engineering depth started.',
    bullets: [
      'Built and supported large enterprise applications in healthcare and supply chain.',
      'Worked deeply with mainframe applications, data, batch processing and enterprise integrations.',
      'Progressed from hands-on development into technical leadership.',
    ],
    closing: 'This foundation still shapes how I approach architecture today.',
  },

  {
    id: 'tech-lead',
    period: '2014 to 2016',
    title: 'Technical Team Lead',
    org: 'IBM Consulting | Amica Mutual Insurance',
    context: 'Guidewire BillingCenter modernization',
    theme: 'LEAD',
    positioning: 'First move from hands-on engineering into technical leadership.',
    bullets: [
      'Led technical delivery for migration of legacy billing data to Guidewire BillingCenter.',
      'Worked across legacy extraction, conversion logic, data mapping and reconciliation.',
      'Coordinated onsite and offshore delivery.',
    ],
  },

  {
    id: 'tech-pm',
    period: '2017 to 2019',
    title: 'Technical Project Manager',
    org: 'IBM Consulting | Amica Mutual Insurance',
    context: 'PolicyCenter modernization across legacy remediation, integration and data conversion',
    theme: 'DELIVER',
    positioning: 'Combined architecture, integration and technical delivery for a complex multi-state modernization.',
    bullets: [
      'Led technical delivery for four lines of business across all 50 states and 36 months of policy history.',
      'Reconstructed complex business rules from COBOL and Assembler and validated them with business SMEs.',
      'Architected and developed a Gateway that combined PolicyCenter and mainframe UDE policies for downstream systems including STAT, Prints and Claims.',
      'Built MQ-triggered CICS integration so PolicyCenter and the mainframe could exchange information while both platforms remained operational.',
      'Supported a phased migration that allowed modern and legacy systems to coexist during transformation.',
    ],
    proofStrip: ['4 lines of business', '50 states', '36 months of policy history'],
  },

  {
    id: 'pm-legacy',
    period: '2020',
    title: 'Project Manager',
    org: 'IBM Consulting | Amica Mutual Insurance',
    theme: 'DELIVER',
    positioning: 'Formal project delivery ownership for complex legacy operations.',
    bullets: [
      'Managed delivery and operational commitments across core legacy applications.',
      'Coordinated priorities across onsite and offshore teams.',
      'Managed production risks, issues and stakeholder expectations.',
    ],
  },

  {
    id: 'program-mgr',
    period: '2021 to 2023',
    title: 'Program Manager',
    org: 'IBM Consulting | Amica Mutual Insurance',
    theme: 'TRANSFORM',
    navProof: '$2M portfolio',
    positioning: 'Scaled from project delivery to formal program leadership.',
    bullets: [
      'Managed a $2M portfolio covering legacy and digital transformation initiatives.',
      'Coordinated delivery across multiple programs and cross-functional teams.',
      'Managed delivery risks, dependencies, resources and financials.',
      'Worked with senior business and technology stakeholders on priorities and delivery decisions.',
    ],
    metric: '$2M transformation portfolio',
  },

  {
    id: 'architect',
    period: '2023 to Present',
    title: 'Application Architect',
    org: 'IBM Consulting | Amica Mutual Insurance',
    theme: 'ARCHITECT',
    navProof: '6 AWS data pipelines',
    positioning: 'Modernizing from mainframe to cloud, data and AI.',
    chapters: [
      {
        id: 'aws-cloud-data',
        period: '2025 to Present',
        title: 'AWS Cloud & Data',
        body: 'Architected reusable AWS data pipelines across enterprise data sources.',
        metric: '6 production data pipelines in AWS',
        secondary: 'Built shared capabilities for pipeline monitoring and tag governance.',
      },
      {
        id: 'financial-modernization',
        period: '2024 to 2025',
        title: 'Financial System Modernization',
        body: 'Translated complex legacy architecture, COBOL and Assembler business rules, data behavior and exceptions into implementation guidance for modern distributed systems.',
      },
      {
        id: 'mainframe-decommission',
        period: '2023 to 2024',
        title: 'Mainframe Decommission',
        body: 'Designed archival and migration approaches enabling retirement of the legacy mainframe while preserving data required for operations, regulatory retention and legal requests.',
        metric: 'Mainframe decommissioned by deadline',
      },
    ],
    evolution: ['Mainframe retired', 'Systems modernized', 'AWS data platform', 'Applied AI'],
  },
]
