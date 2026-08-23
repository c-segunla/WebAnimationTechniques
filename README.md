# ITL303 — Web Animation Techniques Demo

## Project Structure
```
ITL303/
├── index.html          Main demo page (all 4 module sections)
├── css/
│   └── style.css       Transitions, keyframes, easing, reduced-motion guideline
├── js/
│   └── script.js       JS-driven animation (Web Animations API)
├── assets/              (empty — put images/icons here if needed)
└── README.md
```

## How to Open in VS Code
1. Unzip/extract the `ITL303` folder.
2. Open VS Code → **File > Open Folder** → select `ITL303`.
3. Install the **Live Server** extension (by Ritwick Dey) if you don't have it —
   Extensions panel (Ctrl+Shift+X) → search "Live Server" → Install.
4. Right-click `index.html` → **Open with Live Server**.
   This launches the page in your browser and auto-refreshes on save.

## What's Demonstrated
- **Types of Web Animation** — CSS transition (hover button) vs. CSS keyframe
  animation (bouncing box).
- **Animation Principles** — easing comparison: linear vs. ease-out motion,
  side by side.
- **Guidelines** — respects `prefers-reduced-motion` for accessibility.
- **Technologies** — native CSS vs. JavaScript (Web Animations API) example.

## Next Steps for the Demo
- Add a GSAP or Anime.js example under Section 4 to compare library-driven
  animation against vanilla CSS/JS.
- Add a scroll-triggered animation example using `animation-timeline`.
