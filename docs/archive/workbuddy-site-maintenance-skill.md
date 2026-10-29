# WorkBuddy Skill: Zhang Lab Website Maintenance

## Purpose

Use this skill when maintaining the Zhang Lab website forked from the `tylermmy13-droid/SpaceLab` Astro template.

The expected role is to keep the lab website buildable, publishable on GitHub Pages, and consistent with Zhang Lab content and visual identity.

## Repository

Local repository:

```text
/Users/mamingyang/Documents/GitHub/SpaceLab
```

Remote repository:

```text
https://github.com/tylermmy13-droid/SpaceLab
```

The public GitHub Pages path is expected to be:

```text
/ZhangLab/
```

Because this is a project page rather than a user root page, root-relative asset paths must work under `/ZhangLab/` after build.

## Current Site State

The template has already been customized for Zhang Lab.

Main completed changes:

- Replaced template identity with Zhang Lab content.
- Added GitHub Pages deployment workflow at `.github/workflows/deploy.yml`.
- Added post-build path correction script at `scripts/fix-github-pages-base.mjs`.
- Updated `package.json` build command to run Astro build and then apply the GitHub Pages base-path fix.
- Kept the opening homepage welcome text visible after it appears.
- Removed the duplicate static background fallback text behind the homepage welcome screen.
- Replaced the English/display serif font with DM Serif Display using local font files.

Current local font files:

```text
public/assets/fonts/dm-serif-display-latin-400-normal.ttf
public/assets/fonts/dm-serif-display-latin-400-italic.ttf
```

These are registered in `src/styles/global.css` as:

```css
font-family: "DM Serif Display";
```

Do not restore the old `Faire Octave` font unless explicitly requested.

## Important Files

Use these files first when making common changes:

```text
src/styles/global.css
src/components/GlobeMap.astro
src/pages/index.astro
src/data/
public/assets/
public/assets/fonts/
.github/workflows/deploy.yml
scripts/fix-github-pages-base.mjs
package.json
astro.config.mjs
```

Typical meaning:

- `src/components/GlobeMap.astro`: homepage first-screen globe/welcome section.
- `src/styles/global.css`: site-wide typography, colors, layout, and theme rules.
- `src/data/`: structured content if the template stores people, publications, projects, news, or collections there.
- `public/assets/`: static images, fonts, and files copied directly into the built site.
- `.github/workflows/deploy.yml`: GitHub Actions workflow for publishing to GitHub Pages.
- `scripts/fix-github-pages-base.mjs`: post-build fix for `/ZhangLab` asset paths.

## Required Workflow

Before editing, inspect the current state:

```bash
git status --short
```

After editing, always run:

```bash
npm run build
```

A successful build should finish without errors. A warning about large chunks is acceptable unless it becomes a real load-performance problem.

After building, verify that generated files use the expected `/ZhangLab` base path and that no old font references remain:

```bash
rg -l "Faire Octave|faire-octave" src public dist
rg -l "DM Serif Display|dm-serif-display" src public dist
```

Expected result:

- The first command should return no files.
- The second command should return source files and generated CSS files.

## GitHub Pages Deployment

The GitHub Actions workflow should build the Astro site and deploy the generated site to GitHub Pages.

If deployment fails, check in this order:

1. Node version: Astro currently requires Node >=22.12.0, so the workflow should use Node 24 or newer.
2. GitHub repository settings: Pages should use GitHub Actions as the source.
3. GitHub Actions logs: identify whether failure is in dependency install, build, or deploy.
4. `package.json`: make sure the build script still runs the post-build base-path fix.
5. `scripts/fix-github-pages-base.mjs`: make sure it still targets the correct base path, `/ZhangLab`.
6. `dist/`: generated files should include corrected asset paths for GitHub Pages.

Do not delete the deployment workflow or post-build script unless replacing them with a tested equivalent.

## Homepage Welcome Screen

User preference:

- The welcome text that appears on page load should remain visible after appearing.
- The duplicate dark background fallback title should stay removed.

Relevant file:

```text
src/components/GlobeMap.astro
```

Known intended behavior:

- Welcome heading: `Zhang Lab`.
- Subtitle: `Cardiovascular intervention, vascular regeneration, organoid-chip platforms, and AI-enabled active health.`
- If Mapbox or globe loading is unavailable, do not show another large duplicate `Zhang Lab` background block behind the welcome text.

## Typography Rules

English display/serif text should use:

```css
"DM Serif Display", Georgia, "Times New Roman", serif
```

The Chinese/system fallback text can continue using the existing sans-serif stack unless the user requests otherwise.

Font files came from the user's local Downloads folder and were copied into `public/assets/fonts/`. Do not reference `/Users/.../Downloads/...` from CSS because GitHub Pages cannot access local machine paths.

## Content Update Pattern

When updating lab content:

1. Find the existing content structure first instead of inventing a new one.
2. Prefer editing existing data files, Markdown files, or Astro components that already hold similar content.
3. Keep image paths under `public/assets/` or the existing project image folders.
4. Run `npm run build` after every meaningful content change.
5. Report exactly which pages or sections changed.

For people, publications, research areas, and news, preserve the site's existing card/list structure unless the user requests a redesign.

## Visual Maintenance Rules

Keep the site visually aligned with the current Zhang Lab direction:

- Scientific, clean, and modern.
- Dark space-style homepage is acceptable.
- Avoid template filler text and unrelated template imagery.
- Avoid adding large decorative text blocks behind the homepage welcome text.
- Use real lab/research images where available.
- Keep English headings in DM Serif Display.

## Common Checks

Run these checks before handing back to the user:

```bash
npm run build
git status --short
```

Optional targeted checks:

```bash
rg -n "Zhang Lab|Cardiovascular intervention|DM Serif Display" src public
rg -n "/ZhangLab|assets/" dist/index.html dist/_astro/*.css
```

If the user asks to publish:

```bash
git status --short
git add .
git commit -m "Update Zhang Lab website"
git push
```

Only commit or push when the user explicitly asks.

## Handoff Notes

Current known good result:

- Local build passed with `npm run build`.
- New DM Serif Display font files exist in both `public/assets/fonts/` and generated `dist/assets/fonts/` after build.
- No `Faire Octave` or `faire-octave` references remain in `src`, `public`, or `dist` after the latest font update.
- The working tree contains local changes that still need user review, commit, and push.

When taking over, start with `git status --short`, then inspect the changed files before making additional edits.
