# 🌐 Navbar / Header — Component Specification

## 📌 Overview
The **Navbar (Header)** is the primary navigation component for the MDev design system.  
It supports branding, navigation links, dropdown items, and action buttons across mobile, tablet, and desktop breakpoints.

---

# 1. 🧩 Anatomy

┌──────────────────────────────────────────────┐
│ [Avatar] [Brand] [Nav Items...] [Actions] │
└──────────────────────────────────────────────┘

yaml
Copy code

### Elements
1. Brand  
   - Avatar  
   - Brand text  
2. Navigation items  
3. Dropdown nav items  
4. Actions (Log in, Sign up)  
5. Responsive layout container  

---

# 2. 📐 Layout & Spacing

## Header Dimensions
| Breakpoint | Height |
|-----------|--------|
| Mobile | **56px** |
| Tablet | **64px** |
| Desktop | **72px** |

## Container Padding
| Breakpoint | Padding |
|-----------|----------|
| Mobile | `px-4` |
| Tablet | `px-6` |
| Desktop | `px-8` |

## Gaps
| Element | Spacing |
|---------|----------|
Brand ↔ Nav | **32px** |
Nav Items Gap | **24px** |
Nav ↔ Actions | **40px** |

---

# 3. 🪪 Brand Section

## Avatar
| Breakpoint | Size |
|-----------|--------|
| Mobile | **32 × 32px** |
| Desktop | **40 × 40px** |

**Radius:** `--radius-full`  
**Token:** Uses icon/avatar tokens

## Brand Text
- Typography: `text-xl md:text-2xl font-bold`
- Color: `--text-heading`
- Left-aligned next to avatar

---

# 4. 🔗 Navigation Items

## Default Nav Item
- Typography: `text-sm md:text-base`
- Padding: `px-2 py-1`
- Color: `--text-primary`

### States
| State | Style |
|--------|--------|
| Default | `text-primary` |
| Hover | underline + `text-interactive-hover` |
| Active | underline + `text-interactive-active` |
| Disabled | `text-disabled` |

**Active Indicator:**  
`border-b-2 border-interactive`

---

## Dropdown Nav Item
Structure:  
`[Nav Text] + [Chevron Icon]`

### Specs
- Icon size: **16 × 16px**
- Default icon color: `--icon-default`
- Hover icon: `--icon-interactive-hover`
- Touchable area: `px-2 py-1`

### Dropdown Menu (future)
- Background: `--surface-raised`
- Radius: `--radius-md`
- Shadow: `--shadow-md`

---

# 5. 🧭 Action Buttons

## Log In (Text Button)
- Typography: `text-sm md:text-base`
- Default color: `--text-primary`
- Hover color: `--text-interactive-hover`

## Sign Up (Primary Button)
- Variant: **primary**
- Height: **40px**
- Padding: `px-4 md:px-5`
- Text: `.btn-text`
- Radius: `--radius-default`
- Tokens match the Button component specification

---

# 6. 🎨 Colors (Design Tokens)

| Element | Token |
|---------|--------|
Header BG | `--surface-base` |
Text Default | `--text-primary` |
Nav Hover | `--text-interactive-hover` |
Nav Active | `--text-interactive-active` |
Disabled | `--text-disabled` |
Primary Button BG | `--surface-interactive` |
Primary Button Text | `--text-on-interactive` |

---

# 7. 🟦 Borders & Radius

| Element | Radius |
|---------|---------|
Avatar | `--radius-full` |
Buttons | `--radius-default` |
Dropdown Menu | `--radius-md` |

| Element | Border |
|---------|---------|
Nav Active | `--border-interactive` |
Hover States | `--border-interactive-hover` |

---

# 8. 🌫️ Shadows (Optional)
- Sticky Header: `--shadow-sm`
- Dropdown: `--shadow-md`

---

# 9. ⚙️ Interactions & Motion

## Nav Item Hover
color: var(--text-interactive-hover);
text-decoration: underline;
transition: var(--transition-colors);

shell
Copy code

## Dropdown Hover
background: var(--surface-raised);
border-color: var(--border-interactive-hover);

shell
Copy code

## Focus Ring
focus-visible:ring-2
focus-visible:ring-interactive
focus-visible:ring-offset-2

yaml
Copy code

---

# 10. ♿ Accessibility

- Navbar root uses: `role="navigation"`
- Dropdown triggers must include:
  - `aria-expanded`
  - `aria-controls`
- Focus-visible enabled for keyboard users

---

# 11. 📱 Responsive Behavior

### Mobile
- Avatar + Brand name visible  
- Hamburger icon on right  
- Nav items hidden  
- Sign up converted to compact primary button (optional)

### Tablet
- Nav items visible  
- Dropdown items aligned horizontally  
- Actions aligned right  

### Desktop
- Full navigation visible  
- Maximum spacing  
- Large brand and avatar sizes  

---

# 12. 📁 Component Files

components/
navbar/
navbar.js
navbar.css (optional)
navbar.test.js
README.md ← (this file)

yaml
Copy code

---

# ✔️ Quality Checklist

- [x] Uses design tokens  
- [x] Responsive at all breakpoints  
- [x] Brand hierarchy correct  
- [x] Navigation spacing consistent  
- [x] Button styles follow Button spec  
- [x] Fully accessible (A11y compliant)  

---

# 🏁 Final Status
**This Navbar is approved and production-ready.**