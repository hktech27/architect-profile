/**
 * src/data/leadership.js
 *
 * Leadership examples for Screen 08 — Technical Leadership.
 * Three real examples demonstrating technical leadership in practice.
 */

export const leadershipExamples = [
  {
    id: 'challenge-assumptions',
    eyebrow: 'Challenge assumptions',
    headline: 'Question what has been signed off',
    body: 'When a project is moving fast, approvals get taken as facts. I treat sign-off as a starting point, not evidence. I verify before the team builds on it.',
    action: 'Caught a critical dependency that business had signed off as inactive. Raised it before archival became irreversible.',
    outcome: 'Active processing protected. Sign-off corrected.',
    principle: "Don't confuse approval with evidence.",
  },
  {
    id: 'explain-why',
    eyebrow: 'Align around trade-offs',
    headline: 'Make the trade-off visible before the team commits',
    body: 'Teams often align around elegant solutions before the operational constraints are fully understood. I make the trade-off explicit so the team owns the decision together.',
    action: 'Surfaced why the preferred approach would not support the operational requirement. Aligned the team around a practical alternative.',
    outcome: 'Architecture matched what operations actually needed.',
    principle: 'Explain why, not only what.',
  },
  {
    id: 'stay-close',
    eyebrow: 'Lead close to the technology',
    headline: 'Stay close enough to guide, not just direct',
    body: 'Leadership that loses touch with the engineering creates a gap between what is decided and what is built. I stay technically engaged so my direction stays grounded.',
    action: 'Led a cross-functional team while staying hands-on with critical extraction and reconstruction logic.',
    outcome: 'Architecture decisions stayed grounded in implementation reality.',
    principle: 'Guide the team without losing touch with the engineering reality.',
  },
]

export const leadershipProof =
  '~12-person hybrid team  ·  $2M portfolio leadership  ·  Architecture & delivery  ·  Senior stakeholder alignment'

export const leadershipClosing =
  "My role isn't to make every technical decision myself. It is to help teams make better decisions together."
