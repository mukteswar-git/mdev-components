# 🧱 Footer Component — Specification  
**Version:** 1.0  
**Component Name:** Footer (Full Layout)  
**Design System:** MDev UI  

---

# 1. 📌 Overview
The **Footer** is a full-width, multi-section component used at the bottom of all MDev pages.  
It contains:

- Brand (MDev)
- Contact information
- Social media icons
- Quick links
- Legal bar (©, Privacy & Policy, Terms & Condition)

It is fully responsive and follows MDev design tokens for typography, color, spacing, and interaction.

---

# 2. 🧩 Anatomy

┌────────────────────────────────────────────────────────┐
│ MDev │
│ │
│ Contact Follow Quick Links │
│ Phone Social Icons Home │
│ Email About │
│ Services │
│ Testimonial │
│ Contact │
├────────────────────────────────────────────────────────┤
│ © 2025 MDev Privacy & Policy Terms & Condition │
└────────────────────────────────────────────────────────┘

yaml
Copy code

**Sections:**
1. Brand  
2. Contact  
3. Social Icons  
4. Quick Links  
5. Legal Bar  

---

# 3. 📐 Layout & Spacing

## Overall Dimensions
| Breakpoint | Height |
|-----------|--------|
| Mobile | 260–300px |
| Tablet | 280–320px |
| Desktop | 300–350px |

## Spacing
| Element | Spacing |
|---------|---------|
Brand → Contact | 24px |
Contact → Social | 32px |
Social → Quick Links | 40px |
Top Section → Legal Bar | 32px |
Horizontal Padding | `px-4 / px-6 / px-8` |
Vertical Padding | `py-8 md:py-12` |

**Grid:**  
- Mobile: vertical stack  
- Tablet: 2-column or 3-column depending on layout  
- Desktop: 3-column horizontal  

---

# 4. 🪪 Brand Section

### Text
- **MDev**
- Typography: `text-2xl md:text-3xl font-bold`
- Token: `--text-heading`

### Alignment
- Center-aligned on mobile  
- Left-aligned on desktop  

---

# 5. ☎️ Contact Section

### Fields
- Phone: `06782-233362`
- Email: `mukteswar.work@gmail.com`

### Icon Specs
- Size: **20px**
- Color: `--icon-inverse`
- Gap: **8px** between icon + text

### Typography
- `text-sm md:text-base`
- Color: `--text-inverse`

---

# 6. 📱 Social Media Icons

### Icons Included
- LinkedIn  
- GitHub  
- Instagram  
- X  
- YouTube  
- Facebook  

### Icon Specs
| Property | Value |
|----------|--------|
Size | **20–24px** |
Default Color | `--icon-inverse` |
Hover Color | `--icon-interactive-hover` |
Active Color | `--icon-interactive-active` |

### Spacing
- Icon gap: **16px**
- Hit area: `w-10 h-10 flex items-center justify-center`

### Hover Animation (Optional)
transform: translateY(-2px);
transition: var(--transition-transform), var(--transition-colors);

yaml
Copy code

---

# 7. 🔗 Quick Links Section

### Items
- Home  
- About  
- Services  
- Testimonial  
- Contact  

### Typography
- `text-sm md:text-base`
- Color: `--text-primary`

### States
| State | Style |
|-------|--------|
Default | `text-primary` |
Hover | underline + `text-interactive-hover` |
Active | underline + `text-interactive-active` |
Disabled | `text-disabled` |

---

# 8. ⚖️ Legal Bar

### Contents
- © 2025 MDev  
- Privacy & Policy  
- Terms & Condition  

### Typography
- Text: `text-xs md:text-sm`
- Color: `--text-secondary`

### Layout
- © left  
- Links right (desktop)  
- Stacked center (mobile)

### Divider
- `border-t border-divider`
- Token: `--border-divider`

---

# 9. 🎨 Colors (Design Tokens)

| Element | Token |
|---------|---------|
Footer background | `--surface-inverse` |
Text (primary) | `--text-inverse` |
Heading text | `--text-inverse` |
Muted text | `--text-secondary` |
Icon default | `--icon-inverse` |
Icon hover | `--icon-interactive-hover` |
Divider | `--border-divider` |

---

# 10. 🟦 Borders & Radius

| Element | Radius |
|---------|---------|
Icon hover background | `--radius-full` |
Divider | `--border-width-default` |

---

# 11. 🌫️ Shadows (Optional)
- Top shadow for page separation:
  - `--shadow-inner`
  - or `shadow-md` for elevated visual effect

---

# 12. ⚙️ Interactions & Motion

### Link Hover
color: var(--text-interactive-hover);
text-decoration: underline;
transition: var(--transition-colors);

shell
Copy code

### Social Icon Hover
color: var(--icon-interactive-hover);
transform: translateY(-2px);
transition: var(--transition-transform), var(--transition-colors);

shell
Copy code

### Focus Ring
focus-visible:ring-2
focus-visible:ring-interactive
focus-visible:ring-offset-2

yaml
Copy code

---

# 13. ♿ Accessibility

- All icons used as links MUST include:
aria-label="LinkedIn"
aria-label="GitHub"
...

css
Copy code
- Footer must use:
<footer role="contentinfo"> ``` - Keyboard navigation: - Tab focus for all links - Focus-visible styles enabled
14. 📱 Responsive Behavior
Mobile
Vertical stacking

Centered content

Legal bar centered at bottom

Tablet
2 or 3 flexible columns

Icons centered or spaced depending on width

Desktop
3-column layout

Large spacing

Legal bar distributes:

Left: ©

Right: links

15. 📁 Component Architecture
css
Copy code
components/
  footer/
    footer.js
    footer.css (optional)
    footer.test.js
    footer-spec.md   ← (this file)
