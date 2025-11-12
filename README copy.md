# Counter — React useState Warm-Up

Welcome to your warm-up composition! This small React + TypeScript exercise helps you get comfortable editing code by fixing a tiny state bug.

Difficulty: Beginner  
Estimated time: 10–15 minutes

## What is useState?

`useState` lets a React component remember information between renders, like the number of times a button was clicked. It’s like a small notepad the component keeps for itself and updates when something happens (like a click).

## Learning Outcomes

- Understand how to import and use `useState`
- Implement a simple click counter in React
- Fix a small bug to update state correctly

## Prerequisites

- Node.js 18+ installed
- Basic knowledge of React and TypeScript
- Comfort with the terminal and `npm`

## Before You Begin (Environment Checklist)

- `npm --version` works
- Port 5173 available
- Git configured (`git --version`)
- Editor with TypeScript and ESLint plugins

---

## Getting Started

### Step 1: Install dependencies

```bash
npm install
```

### Step 2: Start the app

- Frontend-only:
  - `npm run dev` → open `http://localhost:5173`

Note: The app intentionally ships with a small state bug in `client/src/App.tsx`. Fix it to make the button display how many times it was clicked.

### Step 3: Run tests (optional)

```bash
npm run test
```

### Step 4: Format and lint

```bash
npm run format
npm run lint
```

---

## Standard Ports and Endpoints

- Frontend (Vite): `http://localhost:5173`
- Backend: Not used in this frontend-only warm-up

---

## Project Structure (Frontend-only)

```
counter/
├── client/
│   ├── index.html
│   └── src/{App.tsx,main.tsx,setupTests.ts}
├── docs/{description.md,solution.md}
├── README.md
├── vite.config.ts
├── tsconfig.json
├── eslint.config.js
├── jest.config.js
├── components.json
└── .prettierrc
```

---

## Scripts (package.json)

- `dev`: Vite dev server (client)
- `build`: `tsc -b && vite build`
- `lint`: ESLint check
- `typecheck`: TypeScript type checks
- `format`: Prettier write
- `format:check`: Prettier check
- `test`: Jest (client)
- `preview`: Vite preview (built client)

---

## Configuration Files

Included:

- `vite.config.ts` (alias `@` → `client/src`)
- `jest.config.js` (client jsdom project)
- `eslint.config.js`
- `.prettierrc`
- `tsconfig.json` (paths `@/*` → `client/src/*`)
- `components.json`

---

## Requirements Checklist

### Frontend

- [ ] Button text shows the number of clicks
- [ ] `useState` is imported and used
- [ ] The `onClick` handler increments the count
- [ ] No console errors once fixed; type checks pass

---

## Acceptance Criteria

1. ✓ Button displays the total clicks as “Clicks: N”
2. ✓ Fix applied in `client/src/App.tsx` makes the UI update per click
3. ✓ No console errors; `npm run typecheck` passes after fix
4. ✓ Lint/format clean

---

## Grading Criteria

- Functionality: 50%
- Code Structure and Types: 20%
- Error Handling and UX: 10%
- Testing (if added): 10%
- Code Quality (lint/format/accessibility): 10%

---

## Hints

- First nudge: Import `useState` from `react` and initialize it in the component.
- Deeper: Ensure the click handler uses `setCount(count + 1)`.
- Deepest: If TypeScript complains about missing identifiers, define `const [count, setCount] = useState(0)`.

---

## Troubleshooting

- Problem: Dev server fails to compile  
  Solution: The warm-up intentionally includes a buggy line. Open `client/src/App.tsx` and fix the missing state import/initialization and the incorrect handler line.

- Problem: Port 5173 already in use  
  Solution: Stop the conflicting process or change the Vite port in `vite.config.ts`.

---

## Git Workflow

Recommended flow:

1. Create a feature branch:
   ```bash
   git checkout -b feature/counter
   ```
2. Commit with conventional messages:
   ```bash
   git add .
   git commit -m "feat(counter): fix state bug and show click count"
   ```
3. Push:
   ```bash
   git push origin feature/counter
   ```

---

## Code Quality

- Run `npm run lint` and `npm run format` before committing
- Prefer explicit types; avoid `any`
- Organize imports: external → internal → types
- Use `@/` path aliases for internal modules

### TODO Conventions

- Use `// TODO:` (short, task-focused)
- Place inline where the change is needed
- Keep TODOs concise

---

## Key Concepts You’ll Learn

- `useState` basics
- Handling click events
- Rendering dynamic text in React

---

## Next Steps

- Add a “Reset” button to set the counter back to 0
- Persist the count to `localStorage`
- Add simple tests with Testing Library
