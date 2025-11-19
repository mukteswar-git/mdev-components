# Card Component Specification Sheet

## Overview

The **Card** component is a core surface element used to group related content in the UI. It supports multiple variants, sizes, states, and optional media. This spec defines all design rules, spacing, elevation, and token usage required to maintain consistency across Figma and code.

---

## Variants

The Card component has **4 visual variants**:

### 1. Elevated

* Background: `var(--surface-raised)`
* Shadow: `var(--shadow-md)`
* Border: none
* Use case: Content blocks, dashboard widgets

### 2. Subtle

* Background: `var(--surface-raised)` (softer)
* Shadow: `var(--shadow-xs)`
* Border: none
* Use case: Light grouping, nested content

### 3. Filled

* Background: `var(--surface-accent)`
* Shadow: none
* Border: none
* Text: `var(--text-on-surface)`
* Use case: Feature cards, promo blocks

### 4. Outline

* Background: `var(--surface-base)`
* Shadow: none
* Border: `1px solid var(--border-default)`
* Use case: Minimal containers, forms

---

## States

Each variant supports **4 states**:

| State        | Background                      | Border                         | Shadow                            | Opacity | Interaction    |
| ------------ | ------------------------------- | ------------------------------ | --------------------------------- | ------- | -------------- |
| **Default**  | Variant base                    | Variant base                   | Variant base                      | 100%    | Normal         |
| **Hover**    | Slight tint (if interactive)    | Stronger border (outline only) | +1 shadow level (elevated/subtle) | 100%    | pointer        |
| **Pressed**  | Slightly darker tint            | Stronger border tone           | No shadow / lower shadow          | 100%    | active         |
| **Disabled** | `var(--surface-input-disabled)` | Disabled border (outline only) | None                              | 50%     | No interaction |

---

## Sizing

The Card component supports **3 padding sizes**:

| Size             | Padding | Gap  | Use Case             |
| ---------------- | ------- | ---- | -------------------- |
| **sm**           | 16px    | 12px | Compact cards, lists |
| **md** (default) | 20px    | 16px | Standard UI cards    |
| **lg**           | 24px    | 20px | Hero/featured cards  |

Title + Body + Button spacing follows the **Gap** value.

---

## Corner Radius

Cards always use:

```
var(--radius-lg)  // 16px
```

---

## Typography

### Default UI Cards

* **Title:** `text-lg` to `text-2xl` depending on size
* **Body:** `text-base` or `text-lg`

### Hero Cards (lg padding)

* **Title:** 32px (h2/h1 scale)
* **Body:** 20px

### Button inside card

Uses Button component defaults.

---

## Anatomy

```
[ CARD FRAME ]
  • Auto layout: Vertical
  • Padding: sm/md/lg
  • Gap: sm/md/lg
  • Background: variant-based
  • Border: variant-based
  • Shadow: variant-based
  • Radius: 16px

Inside:
[ Title ]
[ Body Text ]
[ Button Group / Actions ]
```

Optional:

```
[ Image (media-top) ]   // coming in media variants
```

---

## Tokens Used

### Background

* `--surface-base`
* `--surface-raised`
* `--surface-accent`
* `--surface-input-hover`
* `--surface-input-disabled`

### Border

* `--border-default`
* `--border-interactive-hover`
* `--border-interactive-active`
* `--border-input-disabled`

### Shadow

* `--shadow-none`
* `--shadow-xs`
* `--shadow-sm`
* `--shadow-md`
* `--shadow-lg`

### Radius

* `--radius-lg` (16px)

### Typography

* Title: `h3`, `h4`, `text-xl`, `text-2xl`, `32px` (hero)
* Body: `text-base`, `text-lg`, `20px`

---

## Component Properties

| Prop      | Type   | Default    | Description                         |
| --------- | ------ | ---------- | ----------------------------------- |
| `variant` | string | `elevated` | elevated, subtle, filled, outline   |
| `padding` | string | `md`       | sm, md, lg                          |
| `state`   | string | `default`  | default, hover, pressed, disabled   |
| `media`   | string | `none`     | none, image-top, icon (coming soon) |

---

## QA Checklist

* Padding matches size table (sm=16, md=20, lg=24)
* Gap matches size table (12/16/20)
* Radius always 16px
* Shadows match variant and state
* Outlined cards have correct 1px border
* Filled cards use correct **text-on-surface** colors
* Disabled state always has opacity 0.5 and no shadow
* Hug contents works correctly in Auto Layout
* Icon/button/text spacing is consistent

---

End of Card Spec Sheet
