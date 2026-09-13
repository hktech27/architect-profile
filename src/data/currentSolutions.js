/**
 * src/data/currentSolutions.js
 *
 * Content for Screen 03 — What I'm Building.
 * Three solution sections: production pipelines, tag governance, DPMS.
 */

export const productionPipelines = {
  id: 'pipelines',
  heading: 'Production Data Pipelines',
  subheading: 'Five enterprise integrations in production.',
  sources: [
    { name: 'State Street', pdf: '/himanshur-khatri/architect-profile/architecture/Statestreet.pdf', tech: 'REST · S3 Event Triggers' },
    { name: 'Burgiss', pdf: '/himanshur-khatri/architect-profile/architecture/Burgiss.pdf', tech: 'Scheduled Ingestion · API' },
    { name: 'Speech Analytics', pdf: '/himanshur-khatri/architect-profile/architecture/Speech Analytics.pdf', tech: 'Step Functions · Glue Spark' },
    { name: 'Adobe', pdf: '/himanshur-khatri/architect-profile/architecture/Adobe.pdf', tech: 'Analytics Ingest · S3 Stage' },
    { name: 'JIRA', pdf: '/himanshur-khatri/architect-profile/architecture/JIRA.pdf', tech: 'Enterprise Agile Pipeline' },
  ],
  sourceNote: 'Enterprise data sources and integrations within the Amica environment.',
  dataLayers: [
    'Enterprise Sources',
    'Ingestion',
    'Landing / Stage',
    'Raw',
    'Curated',
    'Published',
    'Enterprise Consumers / Analytics',
  ],
  integrationPatterns: [
    'REST APIs',
    'Scheduled ingestion',
    'S3-triggered events',
    'Vendor file delivery',
  ],
  architectureTraits: [
    'Configuration-driven design',
    'Standardized data layers',
    'Common deployment patterns',
    'Reusable across integrations',
  ],
  technologies: [
    'AWS Lambda',
    'AWS S3',
    'AWS Glue',
    'AWS Step Functions',
    'Amazon EventBridge',
    'Amazon SNS',
    'Terraform',
    'Python',
  ],
}

export const tagGovernance = {
  id: 'tag-governance',
  heading: 'Tag Governance Automation',
  status: 'BUILT · DELIVERED',
  statusType: 'delivered',
  ownership: 'IDEA → DESIGN → DEVELOPMENT',
  ownershipNote: 'Himanshu R Khatri',
  problem:
    'Tags across team AWS components were inconsistent or missing — creating gaps in cost visibility, resource tracking and governance.',
  response:
    'Independently identified the problem, then proposed, designed and developed a reusable Lambda-based solution.',
  description:
    'The Lambda accepts a JSON configuration specifying the list of components/resources, component type, tags to add or update, and tags to remove. It processes all requested changes, performs bulk corrections, and produces a JSON execution summary retained for audit reference.',
  flow: [
    'JSON Configuration Input',
    'Tag Governance Lambda',
    'Discover / Enumerate Components',
    'Add · Update · Remove Tags',
    'Audit Summary JSON',
  ],
}

export const dpms = {
  id: 'dpms',
  heading: 'Data Pipeline Monitoring System',
  status: 'IN DEVELOPMENT',
  statusType: 'inDevelopment',
  teamNote: 'Team solution',
  myContribution: 'Configuration-driven monitoring model',
  problem:
    'Monitoring alerts were being missed for some enterprise data pipelines. Addressing monitoring independently per pipeline was not scalable.',
  teamResponse:
    'The team began developing a reusable Data Pipeline Monitoring System to provide consistent, centralized monitoring across all pipelines.',
  myRole:
    'I defined the configuration-driven monitoring model. The config.json describes the expected characteristics of each pipeline — allowing the monitoring workflow to determine whether expected activity actually occurred.',
  configFields: [
    'Expected files from each vendor',
    'File and date naming patterns',
    'Expected arrival days',
    'Processing schedules',
    'Other monitoring metadata',
  ],
  flow: [
    'Vendor Expectations',
    'config.json (monitoring model)',
    'Monitoring Workflow',
    'Step Functions',
    'Lambda Validation',
    'Expected vs Actual',
    'SNS / Alert',
  ],
  technologies: ['Step Functions', 'Lambda', 'SNS', 'config.json'],
}
