---
name: git-pro
description: Git workflow for Web Aether 3.0 — branching strategy, commit conventions, PR flow, conflict resolution, rollback, Vercel preview deploys, git worktrees. Use when working with git, creating branches, resolving conflicts, reviewing history, or managing deployments.
version: 1.0.0
---

# Git Workflow — Aether Labs

## Branch Strategy
```
main           → production (aetherlabs.es)
feat/name      → new features
fix/name       → bug fixes
design/name    → UI/design changes
content/name   → copy/content updates
hotfix/name    → urgent production fix
```

## Commit Convention (Conventional Commits)
```bash
feat: add Clarity Session booking flow
fix: resolve mobile navbar z-index overlap
design: redesign HeroSection v5.2
content: update Labs section copy
perf: lazy load Spline 3D scenes
security: add rate limiting to /api/chat
refactor: extract useScrollAnimation hook
chore: update dependencies

# With scope
feat(school-lab): add course booking page
fix(api): handle OpenAI timeout errors
design(hero): replace video with Seedance animation
```

## Daily Workflow
```bash
# Start new feature
git checkout main
git pull origin main
git checkout -b feat/my-feature

# Work + commit often
git add src/components/v5/NewSection.tsx
git commit -m "feat: add NewSection with scroll animation"

# Push and create PR
git push -u origin feat/my-feature
# → Creates Vercel preview URL automatically

# After PR merged
git checkout main
git pull origin main
git branch -d feat/my-feature
```

## Useful Commands
```bash
# See what changed
git status
git diff                          # unstaged changes
git diff --staged                 # staged changes
git log --oneline -20             # recent commits

# Undo mistakes
git restore src/file.tsx          # discard unstaged changes
git restore --staged src/file.tsx # unstage file
git reset HEAD~1                  # undo last commit (keep changes)

# Stash work in progress
git stash
git stash pop
git stash list

# Find when a bug was introduced
git bisect start
git bisect bad HEAD
git bisect good [known-good-commit]
```

## Resolving Merge Conflicts
```bash
git checkout main && git pull
git checkout feat/my-branch
git merge main  # or git rebase main

# In conflict file, look for:
<<<<<<< HEAD (your branch)
your code
=======
main code
>>>>>>> main

# Keep the right version, remove markers
# Then:
git add .
git commit -m "merge: resolve conflict in HeroSection"
```

## Rollback Production
```bash
# Find the last working commit
git log --oneline main

# Option 1: Revert (creates new commit, safe)
git revert abc1234
git push origin main

# Option 2: Via Vercel Dashboard → Deployments → Promote older deploy

# Emergency: force to previous working state (risky)
git reset --hard abc1234
git push --force-with-lease origin main
```

## Git Worktrees (already used in this project)
```bash
# Work on two branches simultaneously (already in .claude/worktrees)
git worktree add .claude/worktrees/feature-branch feat/feature-branch

# List worktrees
git worktree list

# Remove worktree
git worktree remove .claude/worktrees/feature-branch
git worktree prune  # clean up stale references
```

## .gitignore for this project
```
node_modules/
.next/
.env.local
.env.*.local
*.tsbuildinfo
/public/uploads/
.DS_Store
```

## Before Every Push
```bash
npm run build    # ensure build passes
npm run lint     # fix lint errors
git status       # verify no sensitive files staged
```
