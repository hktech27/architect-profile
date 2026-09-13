/**
 * src/data/architectureCases.js
 *
 * Architecture case studies for Screen 04 — How I Architect.
 *
 * pdfPath: Path to the original architecture diagram PDF.
 *          Leave as "" to show the "Architecture diagram — coming soon" placeholder.
 *
 * IMPORTANT: No internal bucket names, Lambda names, API endpoints,
 *            environment identifiers, or proprietary naming in website content.
 *            Original PDFs are available via the Diagram PDF button.
 */

export const architectureCases = [
  {
    id: 'state-street',
    title: 'Selective Restart Through Trigger-File Orchestration',
    context: 'Financial & Custody Data Integration',
    problem:
      'The integration first retrieves the processing context (entity IDs) via an initial API, then calls separate APIs for Activities, Positions and Transactions. If processing was incomplete for a subset, the operational team needed a way to restart only the affected downstream processing — not replay the entire workflow from the beginning.',
    decision:
      'Initial design considered AWS Step Functions for end-to-end orchestration. The operational requirement for granular per-path restart shifted the design toward independent trigger files for downstream Activities, Positions and Transactions processing, allowing selective restart without full pipeline re-execution.',
    outcome:
      'Each downstream path operates independently via trigger files. Incomplete processing can be restarted selectively, matching the operational reality of how the integration is monitored and managed.',
    keyMessage: 'Choose the pattern that best supports how the system will actually be operated.',
    executiveWhy: 'Independent trigger paths support granular operational restart control.',
    techStack: ['Amazon EventBridge', 'AWS Lambda', 'Amazon S3', 'Python REST Client'],
    architectureFlow: [
      { step: 'Scheduled Start', desc: 'EventBridge initiates timed execution' },
      { step: 'Initial API / Entity IDs', desc: 'Retrieves the processing context for the run' },
      { step: 'Independent Trigger Files', desc: 'Separate trigger files emitted for each downstream path', highlight: true },
      { step: 'Activities | Positions | Transactions', desc: 'Independent API ingestion per data type' },
      { step: 'Landing → Raw → Curated → Published', desc: 'Common data layer progression' },
    ],
    tradeoffs: [
      { option: 'Standard: Step Functions orchestration', verdict: 'A failed entity would force restart of the whole batch' },
      { option: 'Chosen: Independent Trigger Files', verdict: 'Granular operational restart control per downstream path' }
    ],
    decisionNote: 'Architecture should support how the system will actually be operated.',
    pdfPath: '/architect-profile/architecture/Statestreet.pdf',
  },
  {
    id: 'speech-analytics',
    title: 'Scale-Driven Architecture Evolution',
    context: 'High-Volume API Data Processing',
    problem:
      'The initial Lambda-oriented approach worked during development. Production-scale data volumes revealed that processing could exceed Lambda\'s practical runtime constraints, requiring the architecture to evolve.',
    decision:
      'Moved orchestration to Step Functions and heavy transformation to AWS Glue, allowing the pipeline to handle production-scale volumes reliably with appropriate tooling at each layer.',
    outcome:
      'A maintainable pipeline where each layer uses the right tool for its job — Step Functions for orchestration, Glue for volume processing.',
    keyMessage: 'Architecture should change when production evidence invalidates the original assumption.',
    executiveWhy: 'Runtime and processing-scale constraints drove a design evolution from Lambda-centric to Step Functions + Glue.',
    techStack: ['AWS Step Functions', 'AWS Glue', 'AWS Lambda', 'Amazon S3', 'Amazon SNS'],
    architectureFlow: [
      { step: 'Scheduled Start', desc: 'Daily execution schedule' },
      { step: 'Step Functions', desc: 'Orchestrates API extraction and token lifecycle', highlight: true },
      { step: 'API Extraction → Stage', desc: 'Documents and Sentences datasets extracted to Stage' },
      { step: 'AWS Glue', desc: 'Transformation and normalization at production scale', highlight: true },
      { step: 'Raw → Curated → Published', desc: 'Common data layer progression' },
    ],
    tradeoffs: [
      { option: 'Initial: Lambda-centric processing', verdict: 'Production-scale data could exceed Lambda runtime constraints' },
      { option: 'Evolved: Step Functions + Glue', verdict: 'Handles production volume with appropriate tooling at each layer' }
    ],
    decisionNote: 'Lambda constraints at production volume → Step Functions + Glue orchestration.',
    pdfPath: '/architect-profile/architecture/Speech Analytics.pdf',
  },
  {
    id: 'genesys-ava',
    title: 'Availability-Aware Retry & Checkpoint Orchestration',
    context: 'Asynchronous Enterprise Data Integration',
    problem:
      'The upstream conversation data was not guaranteed to be available exactly when the downstream process started. The workflow needed to model waiting, retry and checkpoint state explicitly rather than assuming immediate data availability.',
    decision:
      'The architecture includes an explicit availability check at the start of execution. When data is not yet ready, the workflow waits 30 minutes and retries. Maximum retry handling triggers failure notification and checkpoint updates. When data is confirmed ready, API extraction proceeds through parallel data processing paths into the common data layers.',
    outcome:
      'A workflow that correctly models time and state — handling delayed upstream data without failing or requiring manual intervention within normal retry bounds.',
    keyMessage: 'Distributed workflows must design for time and state, not only data movement.',
    executiveWhy: 'Explicit retry and checkpoint orchestration handles upstream data availability delays without manual intervention.',
    techStack: ['AWS Step Functions', 'AWS Lambda', 'Amazon S3', 'Amazon SNS'],
    architectureFlow: [
      { step: 'Scheduled Start', desc: 'Step Functions execution initiated on schedule' },
      { step: 'Availability Check', desc: 'Checks whether upstream conversation data is ready', highlight: true },
      { step: 'Wait 30 min → Retry', desc: 'If not ready: wait and retry; max retries trigger failure notification' },
      { step: 'API Extraction → Stage', desc: 'Parallel data extraction when data is confirmed available' },
      { step: 'Raw → Curated → Published', desc: 'Common data layer progression with checkpoint updates' },
    ],
    tradeoffs: [
      { option: 'Assume immediate availability', verdict: 'Pipeline would fail when upstream data arrives late' },
      { option: 'Chosen: Explicit wait/retry/checkpoint', verdict: 'Handles delayed data within normal operating bounds without manual intervention' }
    ],
    decisionNote: 'Distributed workflows must design for time and state, not only data movement.',
    pdfPath: '/architect-profile/architecture/Genesys AVA.pdf',
  },
]
