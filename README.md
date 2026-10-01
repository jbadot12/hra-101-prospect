# HRA 101 — Prospect Conversation

V1 of a prospect-facing, guided Health Risk Assessment (HRA) conversation. This static site is designed to support a live discussion without the linear feel of a presentation deck.

## Narrative path

1. Set the scene: an HRA meets a consumer between a health question and a decision to seek care.
2. Establish the consumer and health-system value, clinical foundation, white-label experience, and configurable strategy.
3. Show how paid, owned, organic, and integrated marketing lead consumers to an assessment.
4. Walk through the connected experience: reach, choose, assess, act, and continue.
5. Ground the strategy in case studies from CHRISTUS, National Spine & Pain, Norton, and El Camino; open the full PDFs as needed.
6. Use the searchable portfolio to open the most relevant live HRA demo in a separate tab.
7. Return to the page to discuss built-in follow-up and connected systems.
8. Explore Console screenshots for management, reporting, and optimization without logging into the live Console.

## Run locally

From this folder:

```sh
python3 -m http.server 8000
```

Then open `http://localhost:8000`.

## Files

- `index.html` — page content and narrative structure
- `styles.css` — responsive visual system
- `script.js` — portfolio search/filter, interactive stories, and navigation state
- `assets/` — approved visual examples adapted from the internal HRA 101 experience

## Content governance

- The public site is marked `noindex,nofollow` to discourage search indexing.
- The site contains no PHI and no credentials.
- HRA-specific clinical notes are linked as presenter references; broader internal Resource Hub and Key documentation are intentionally excluded.
- HRA demos and sample pages open in a separate tab.
- Case-study results are specific to the featured programs and are not guarantees of future performance.

## Status

Updated October 1, 2026. Published at https://jbadot12.github.io/hra-101-prospect/ through GitHub Pages from the root of `main`.

Next step: use the full conversation path in a live walkthrough and refine from presenter feedback. Console screenshots show a demo environment; the four view buttons update the screenshot and explanation, and each screenshot can open at full size.
