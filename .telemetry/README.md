# .telemetry/

This folder contains product telemetry artifacts: structured descriptions of what the product tracks, why, and how.

## What's in here

| File | Purpose |
|------|---------|
| `README.md` | Explains the telemetry folder |
| `product.md` | Product description: what the site does, who uses it, and how value flows |
| `current-state.yaml` | Reverse-engineered inventory of tracking currently in the codebase |
| `tracking-plan.yaml` | Target tracking plan: what should be tracked |
| `delta.md` | Difference between current state and target plan |
| `instrument.md` | PostHog-specific implementation guide |
| `current-implementation.md` | How analytics is wired today |
| `audits/` | Timestamped audit snapshots |

## Workflow

These artifacts follow the tracking lifecycle:

```text
model -> audit -> design -> guide -> implement <- feature updates
```

Keep this folder in version control so tracking decisions evolve with the product.
