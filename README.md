# Majenta Solutions — Blueprint to Built Reality

Production-ready Vite + Three.js concept based on the approved Web4 architecture.

## Run locally
```bash
npm install
npm run dev
```

## Build
```bash
npm run build
```

## 3D asset
The repository ships the optimized runtime model at `public/model-web.glb`.

Runtime model:
- ~13 MB transfer size
- ~1.08M triangles
- Meshopt geometry compression
- Quantized vertex attributes
- WebP textures capped at 2048px

The original ~296 MB / 7.87M-triangle Meshy master is intentionally excluded from Git history and should be retained separately as the immutable source asset.

## Brand logo
The interactive build currently uses a CSS-rendered Majenta wordmark because the supplied logo binary could not be transferred through the Web4/Vercel connector. Replace it with the original supplied PNG before public production if required.

## Runtime
Three.js · GSAP + ScrollTrigger · Lenis · Vite

## Story
Roadmap → BIM model → Coordination → 4D / programme → Information handover → Enquire

