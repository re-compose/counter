# Counter — Technical Description

## Metadata

- Title: Counter — React useState Warm-Up
- Primary Concept: React `useState`
- Difficulty: Beginner
- Estimated Duration: 10–15 minutes

## Problem Statement

Implement a simple counter where clicking a button increases the visible count. The initial code includes a small bug: missing state setup and an incorrect click handler line. A successful solution fixes the bug so the button text shows how many times it has been clicked.

## Problem Details

1. Frontend: Display a button showing the current number of clicks.
2. Frontend: Update the number with each click.
3. Data handling: In-memory only using React `useState`.
4. Error handling/UX: No special cases; just ensure the button responds to clicks without errors.

## Use Cases

### Primary Use Case

User loads the page, sees a button labeled “Clicks: 0”, clicks it, and the label increments by 1 each time.

### Secondary Use Cases

- [Reset] → Optional enhancement to reset the count to 0.
- [Persistence] → Optional enhancement to store count in `localStorage`.
- [Accessibility] → Button is keyboard accessible and clearly labeled.

## Constraints

### Technical Constraints

| Constraint    | Value  | Description                                     |
| ------------- | ------ | ----------------------------------------------- |
| Frontend Port | `5173` | Vite development server                         |
| Backend Port  | N/A    | Frontend-only composition                       |
| API Prefix    | N/A    | No API used                                     |
| Validation    | N/A    | No server validation required                   |
| UI Library    | React  | Minimal UI, no external component libs required |

### Business Rules

1. Keep it simple: single button, single state value.
2. The warm-up must start buggy to encourage a quick fix.
3. Keep the code readable and well-typed.

### Focus and Limitations

- Do:
  - Focus on `useState` and event handling
  - Keep code minimal and clear
- Don’t:
  - Add external state libraries
  - Add server code or extra routing

## Input/Output Contract

### Data Format

In-memory only:

```ts
export interface CounterState {
  count: number; // required
}
```

### UI Behavior

- Clicking the button increments `count` by 1
- The button’s text reads “Clicks: {count}”

## Test Data

No external dataset is used. Initial state is `count = 0`.

## Project Structure

```
counter/
├── client/                 # Frontend React application
│   └── src/{pages,components,lib} (not all used in this warm-up)
├── docs/                   # Description & solution
└── tests/                  # Not included for this warm-up
```

## Provided Assets

- None required for this warm-up.

## Requirements Checklist

### Frontend Requirements

- [ ] Button renders and shows the count
- [ ] `useState` hook manages the count
- [ ] Click handler increments the count
- [ ] Type checks and lint pass after fix

### Data Requirements

- [ ] In-memory only (`useState`)

## Examples

### Example 1

**Input:**  
User clicks the button 3 times.

**Process:**

1. Initial state `count = 0`
2. After clicks: `count = 3`

**Output:**  
Button shows “Clicks: 3”

### Example 2

**Input:**  
User clicks the button once, refreshes, and sees “Clicks: 0” again.

**Process:**  
State resets on reload.

**Output:**  
Button shows “Clicks: 0”

## Image Assets

Not applicable.

## Key Concepts to Understand

1. `useState` — component-local state
2. Event handling — `onClick`
3. Rendering dynamic values — using JSX expressions

## Acceptance Criteria

Your solution is complete when:

1. Button text updates with each click
2. `useState` is properly set up
3. No console errors; `npm run typecheck` passes
4. Lint and format checks pass

## Success Signals

- On success: Button text reads “Clicks: N” and increments per click
- On failure: Compile error referencing missing state or invalid handler
- URL stays at `/` (no routing included)

## Hints

- Start by importing `useState` and setting `const [count, setCount] = useState(0)`.
- Update with `setCount(count + 1)` in the `onClick` handler.
- If TypeScript can’t find `count` or `setCount`, you haven’t declared state in the component.

## Performance Notes

Not applicable for this warm-up.

## Next Steps After Completion

- Add a Reset button
- Persist to `localStorage`
- Add a simple test using Testing Library
