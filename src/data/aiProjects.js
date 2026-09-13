/**
 * src/data/aiProjects.js
 *
 * Applied AI project cards for Screen 06.
 *
 * demoUrl: Set to a YouTube/Vimeo URL to enable the Watch Demo button.
 *          Leave as "" to show a "View Solution" button instead.
 *          Set to a local file path (e.g. "/architect-profile/demos/PreClaimIQ.mp4")
 *          for locally hosted video.
 *
 * NOTE: File names with spaces or special characters must be URL-encoded.
 *   Space → %20    +  → %2B
 */

export const aiProjects = [
  {
    id: 'preclaimiq',
    name: 'PreClaimIQ — Agentic Insurance Workflow',
    event: 'IBM Consulting ICA Bob-a-thon 2026',
    achievement: '🏆 1st Place',
    team: 'Team BobMavericks',
    tagline: 'Agentic insurance prototype combining multiple specialized agents with enterprise context.',
    description:
      'Agentic insurance prototype combining multiple specialized agents, enterprise context and domain knowledge to assist pre-claim intake and triage.',
    executiveValue: 'Demonstrated how multiple context-grounded agents can cooperate across an insurance workflow with traceable enterprise context.',
    tags: ['IBM ICA / Agentic App Studio', 'Context Studio', 'MCP', 'Knowledge Graph', 'React', 'Node.js'],
    demoUrl: '/architect-profile/demos/PreClaimIQ.mp4',
    highlight: true,
  },
  {
    id: 'coveriq',
    name: 'CoverIQ++ — Policy Intelligence',
    event: 'Frontier Forge Buildathon 2026',
    achievement: 'Top 20 — Frontier Forge Buildathon 2026',
    team: 'Team121_Mavericks',
    tagline: 'Generative AI for commercial insurance policy interpretation.',
    description:
      'Generative AI prototype for interpreting commercial insurance policy wording and surfacing coverage considerations for review.',
    executiveValue: 'Demonstrated practical use of Generative AI for document-heavy insurance workflows.',
    tags: ['Generative AI', 'Document Intelligence', 'Commercial Insurance', 'Azure OpenAI'],
    demoUrl: '/architect-profile/demos/CoverIQ.mp4',
    highlight: false,
  },
  {
    id: 'br-impactlens',
    name: 'BR Impact Lens — Rules Intelligence',
    event: 'watsonx Challenge 2026',
    achievement: 'watsonx Challenge 2026',
    team: 'Lead Contributor',
    tagline: 'One rule changed. See every ripple.',
    description:
      'Prototype for analyzing the downstream impact of insurance business-rule changes across related systems, APIs, schemas and workflows.',
    executiveValue: 'Explores how AI can help teams understand change impact before implementation and testing.',
    tags: ['watsonx', 'Agentic workflows', 'Insurance Business Rules', 'Legacy Modernization'],
    demoUrl: '/architect-profile/demos/BR-ImpactLens.mp4',
    highlight: false,
  },
]
