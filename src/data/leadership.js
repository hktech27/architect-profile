/**
 * src/data/leadership.js
 *
 * Leadership examples for Screen 08 — Technical Leadership.
 * Three real examples demonstrating technical leadership in practice.
 */

export const leadershipExamples = [
  {
    id: 'challenge-assumptions',
    eyebrow: 'Challenge Assumptions',
    headline: 'Evidence over sign-off',
    body: 'Business sign-off indicated legacy Life files were no longer used. Dependency analysis showed they still supported active discount and payment-plan processing.',
    action: 'Raised the dependency before archival became irreversible.',
    outcome: 'Sign-off corrected. Active processing protected.',
    principle: "Don't confuse approval with evidence.",
  },
  {
    id: 'explain-why',
    eyebrow: 'Align Around Trade-Offs',
    headline: 'Operations over elegance',
    body: 'The team initially favored Step Functions. Selective-restart requirements made independent trigger paths more practical.',
    action: 'Made the trade-off explicit and aligned the team around the alternative.',
    outcome: 'Architecture supported granular operational restart.',
    principle: 'Explain why, not only what.',
  },
  {
    id: 'stay-close',
    eyebrow: 'Lead Close to the Technology',
    headline: 'Direction without distance',
    body: 'Led technical direction across a ~12-person Amica/IBM team during mainframe decommission while contributing to critical Python extraction and reconstruction logic.',
    action: null,
    outcome: 'Architecture decisions stayed grounded in implementation reality.',
    principle: 'Guide the team without losing touch with the engineering reality.',
  },
]

export const leadershipProof =
  '~12-person hybrid team  ·  $5M portfolio leadership  ·  Architecture & delivery  ·  Senior stakeholder alignment'

export const leadershipClosing =
  "My role isn't to make every technical decision myself. It is to help teams make better decisions together."
