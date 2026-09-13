/**
 * src/data/transformation.js
 *
 * Enterprise transformation timeline for Screen 05.
 * detail: one-sentence description shown on hover/click.
 */

export const transformationMilestones = [
  {
    id: 'billingcenter',
    year: '2014',
    system: 'Guidewire BillingCenter',
    verb: 'CONVERT',
    scope: 'Enterprise Billing Conversion',
    detail: 'Led onsite/offshore technical delivery for legacy billing data conversion into Guidewire BillingCenter.',
    impact: 'Supported enterprise billing conversion with controlled reconciliation and cutover.'
  },
  {
    id: 'policycenter',
    year: '2017',
    system: 'PolicyCenter · Gateway · MF Integration',
    verb: 'ARCHITECT & DELIVER',
    scope: 'Multi-State Core Modernization + Hybrid Architecture',
    detail: 'Led multi-state PolicyCenter conversion across four lines of business and all 50 states with 36 months of policy history and COBOL/Assembler rule reconstruction. Architected and developed a Gateway enabling PolicyCenter and Mainframe UDE policies to be processed in combination, with batch sending combined data to downstream systems (STAT, Prints, Claims). Built bidirectional PolicyCenter–Mainframe integration via MQ-triggered CICS transactions, allowing PC to read MF data and vice versa.',
    impact: 'Delivered a hybrid architecture that let PolicyCenter and legacy Mainframe operate in parallel without downstream system disruption — reducing conversion risk while preserving business continuity throughout the phased rollout.'
  },
  {
    id: 'legacy-systems',
    year: '2020',
    system: 'Core Systems Portfolio',
    verb: 'DELIVER',
    scope: 'Portfolio Delivery & Operations',
    detail: 'Managed legacy systems and operational delivery across complex enterprise dependencies.',
    impact: 'Maintained delivery commitments across multi-vendor legacy system operations.'
  },
  {
    id: 'transformation-portfolio',
    year: '2021',
    system: 'Transformation Portfolio',
    verb: 'LEAD',
    scope: '$5M Program Portfolio',
    detail: 'Managed a $5M portfolio across legacy and digital transformation initiatives, balancing delivery, governance, risk, budget and stakeholder priorities.',
    impact: 'Formal program management experience across concurrent transformation workstreams.'
  },
  {
    id: 'mainframe-decommission',
    year: '2023',
    system: 'Mainframe Decommission',
    verb: 'RETIRE',
    scope: 'Legacy Platform Retirement',
    detail: 'Helped architect and deliver a board-mandated mainframe retirement while preserving business and regulatory access to retained data across four archival patterns: simple DB2, complex DB2 with entity extraction, flat files/VSAM, and large-file partitioned archival.',
    impact: 'Mainframe retired by deadline while required retained data remained accessible to business and regulatory consumers.'
  },
  {
    id: 'financial-modernization',
    year: '2024',
    system: 'Financial Systems Re-Arch',
    verb: 'RE-ARCHITECT',
    scope: 'Legacy Logic to Modern Architecture',
    detail: 'Translated legacy financial-system behavior, COBOL/Assembler logic, business rules and data exceptions into implementation guidance for distributed-system developers, and supported parallel validation.',
    impact: 'Provided the bridge between legacy system knowledge and target architecture implementation.'
  },
  {
    id: 'aws-cloud-data',
    year: '2025 – Today',
    system: 'Enterprise Cloud & AI',
    verb: 'CLOUD-ENABLE',
    scope: 'Reusable AWS Data Pipelines',
    detail: 'Architecting reusable AWS data pipelines while expanding practical experience in Agentic AI and enterprise AI workflows.',
    impact: '5 enterprise data integrations in production on a shared reusable architecture pattern.'
  },
]

export const transformationStatement =
  'From converting legacy platforms to designing the systems that replace them.'
