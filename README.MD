component-library/
├── design/
│   ├── figma/
│   │   ├── design-tokens.json        ⬅️ Exported from Figma
│   │   ├── component-specs.md        ⬅️ Design specifications
│   │   └── figma-links.md            ⬅️ Links to Figma files
│   │
│   ├── exports/
│   │   ├── icons/                    ⬅️ SVG exports
│   │   ├── images/                   ⬅️ Component screenshots
│   │   └── specs/                    ⬅️ Individual component specs
│   │       ├── button-spec.md
│   │       ├── input-spec.md
│   │       └── card-spec.md
│   │
│   └── mockups/                      ⬅️ PNG/JPG examples
│       ├── button-variants.png
│       ├── input-states.png
│       └── card-layouts.png
|
├── docs/
│   ├── component-guidelines.md
│   ├── design-system.md              ⬅️ Design principles
│   └── figma-to-code.md              ⬅️ Your process doc
│
└── examples/
|    ├── index.html                    ⬅️ Live component showcase
|    └── storybook/                    ⬅️ (Optional) Interactive demos
|    
src/
├── styles/
│   ├── tokens/
│   │   ├── colors.css          ✅ Design tokens
│   │   ├── typography.css      ✅ Design tokens
│   │   ├── borders.css         ✅ Design tokens
│   │   ├── shadows.css         ✅ Design tokens
│   │   ├── layout.css          ✅ Design tokens
│   │   └── transitions.css     ✅ Design tokens
│   │
│   ├── base.css                ✅ Imports all tokens + resets
│   └── components.css          ✅ Optional component-specific overrides
│
├── components/
|   ├── alert/
│   │   └── alert.js                 ⬅️ NEW: All JS components here
│   ├── button/
│   │   └── button.js
│   ├── input/
│   │   └── input.js
│   ├── card/
│   │   └── card.js
|   ├── container/
│   │   └── container.js
│   ├── navbar/
│   │   └── navbar.js
│   ├── footer/
│   │   └── footer.js
│   ├── modal/
│   │   └── modal.js
│   ├── alert/
│   │   └── alert.js
│   └── index.js                ⬅️ Export all components
│
├── utils/                      ⬅️ NEW: Helper utilities
│   └── cn.js                   ⬅️ Class name merger (clsx + twMerge)
│
└── main.css                    ✅ Main entry (imports base.css)