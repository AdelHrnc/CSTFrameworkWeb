# Copilot Instructions for CSTAPP

## Project Overview
- **CSTAPP** is a React-based single-page application for exploring design recommendations for children in creative support technology.
- The app is organized around three main topics: **Cognitive**, **Socio-Emotional**, and **Physical**. Each topic has its own screen and subtopics.
- Data for subtopics and recommendations is defined in `points.js` and imported as `cognitivePoints`.

## UI Architecture
- The main entry point is `App.jsx`, which manages navigation, state, and rendering for all screens.
- The **SideTab** component (inline in `App.jsx`) provides topic navigation. On desktop, it slides out on hover; on mobile, it is fixed at the bottom.
- Subtopics for "Cognitive" are shown as indented, animated lists under their parent when expanded (see the `expanded` state and subtopic rendering in `App.jsx`).
- All topic and subtopic navigation is handled via React state, not routing.

## Styling & Animation
- Styles are defined in `index.css`.
- The `.side-tab` class controls the side navigation. On desktop, buttons slide in on hover (`.side-tab:hover button { opacity: 1; }`).
- Subtopics under "Cognitive" use a vertical stack with indentation and appear/disappear with a flex column and margin. To animate subtopic sliding, use a transition on `max-height` and `opacity` (see `.tree-children` for an example pattern).
- Buttons use `.btn`, `.card`, and `.sub-btn` classes for consistent appearance.

## Developer Workflows
- **Start/Dev:** `npm run dev` (uses Vite)
- **Build:** `npm run build`
- **No test suite** is present by default.
- **No routing**: All navigation is state-driven in `App.jsx`.

## Patterns & Conventions
- All UI logic is colocated in `App.jsx` (no separate components directory).
- Data for recommendations is structured in `points.js` as nested objects.
- Use inline styles for minor layout tweaks, but prefer CSS classes for major layout and animation.
- Topic and subtopic IDs must match between navigation and data objects.

## Example: Adding a New Subtopic
1. Add a new subtopic under the relevant section in `points.js`.
2. Update the subtopic rendering logic in `App.jsx` to include a button for the new subtopic.
3. Style as needed in `index.css`.

## Key Files
- `App.jsx`: Main app logic, navigation, and UI.
- `points.js`: Data for recommendations and subtopics.
- `index.css`: All global and responsive styles.

## Integration Points
- No external APIs or backend integration.
- All data is local and static.

---
For UI/UX changes, always check both `App.jsx` and `index.css` for relevant logic and styles. For new topics or subtopics, update both the data and the UI logic.
