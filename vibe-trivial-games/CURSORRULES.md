# Cursor Project Rules

## Commit Messages

All commit messages should be in English, using the following format:

```
<type>: <description>
```

Examples:
- `Fix: Remove excess margins and improve responsive design`
- `Feature: Add rock-paper-scissors game`
- `Refactor: Improve game wrapper component`
- `Docs: Update README with deployment instructions`

## Code Style

- Use Tailwind CSS for styling
- Keep mobile-first approach in mind
- Remove unnecessary margins on mobile
- Use responsive design with appropriate breakpoints (sm, md, lg)

## Project Structure

- Game components should be in the `src/games/` directory
- Shared components should be in the `src/components/` directory
- Each game should be a self-contained component

## Deployment

- GitHub Pages is used for deployment 
- Deploy using `npm run deploy` or wait for GitHub Actions to deploy automatically
- Base path is set to `/vibe-trivial-games/` in vite.config.ts 
