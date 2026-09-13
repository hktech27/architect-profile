# Architecture Diagrams

Place your sanitized architecture diagram images in this folder.

## How to add diagrams

Drop your PNG, SVG, or JPG files here and update the `imagePath` field in `src/data/architectureCases.js`.

## Expected files

| File | Case Study |
|------|-----------|
| `state-street.png` | State Street — Trigger-File Orchestration |
| `speech-analytics.png` | Speech Analytics — Step Functions + Glue |
| `genesys-ava.png` | Genesys AVA — Async Conversation Flow |

## Notes

- Images should be sanitized versions — no internal bucket names, Lambda names, URLs, or environment identifiers
- Recommended image width: 1200–1600px for clarity in expanded view
- The site will show a "coming soon" placeholder until the file is present
- The `imagePath` in `architectureCases.js` uses the path relative to the deployed base, e.g. `/architect-profile/architecture/state-street.png`
