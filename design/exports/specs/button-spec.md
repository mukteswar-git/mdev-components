# Button Component Specification Sheet

## Overview

The Button component is a core interactive element in the design system. It supports multiple variants, sizes, states, and token-based styling to ensure consistency across both Figma and code.

---

## Variants

| Variant         | Background                   | Text Color                   | Border                      | Hover BG                           | Active BG                           | Focus Ring                  |
| --------------- | ---------------------------- | ---------------------------- | --------------------------- | ---------------------------------- | ----------------------------------- | --------------------------- |
| **Primary**     | `var(--surface-interactive)` | `var(--text-on-interactive)` | none                        | `var(--surface-interactive-hover)` | `var(--surface-interactive-active)` | `var(--border-interactive)` |
| **Secondary**   | `var(--surface-base)`        | `var(--text-primary)`        | `1px var(--border-default)` | `var(--surface-raised)`            | `var(--surface-interactive-hover)`  | `var(--border-default)`     |
| **Ghost**       | transparent                  | `var(--text-primary)`        | none                        | `var(--surface-raised)`            | `var(--surface-interactive-hover)`  | `var(--border-default)`     |
| **Outline**     | transparent                  | `var(--text-primary)`        | `1px var(--border-default)` | `var(--surface-raised)`            | `var(--surface-interactive-hover)`  | `var(--border-interactive)` |
| **Destructive** | `var(--surface-error)`       | `var(--text-on-error)`       | none                        | `var(--surface-error-muted)`       | `var(--red-default-light)`          | `var(--border-error)`       |

---

## Sizes

| Size     | Height | Horizontal Padding | Typography     | Radius             |
| -------- | ------ | ------------------ | -------------- | ------------------ |
| **sm**   | 36px   | 12px               | `.btn-text`    | `var(--radius-md)` |
| **md**   | 40px   | 16px               | `.btn-text`    | `var(--radius-md)` |
| **lg**   | 44px   | 24px               | `.btn-text-lg` | `var(--radius-lg)` |
| **icon** | 40×40  | 0                  | none           | `var(--radius-md)` |

---

## States

| State        | Description                                        |
| ------------ | -------------------------------------------------- |
| **Default**  | Base variant styling with assigned tokens          |
| **Hover**    | Applies hover background token; cursor pointer     |
| **Active**   | Uses active background token                       |
| **Focus**    | Displays a 2px ring using variant focus ring token |
| **Disabled** | Opacity 0.5; no hover, no focus, no pointer events |

---

## Tokens Used

### Background Tokens

* `--surface-interactive`
* `--surface-interactive-hover`
* `--surface-interactive-active`
* `--surface-base`
* `--surface-raised`
* `--surface-error`
* `--surface-error-muted`

### Border Tokens

* `--border-default`
* `--border-interactive`
* `--border-error`

### Text Tokens

* `--text-primary`
* `--text-on-interactive`
* `--text-on-error`
* `--text-disabled`

### Radius Tokens

* `--radius-md`
* `--radius-lg`

---

## Component Properties

| Prop         | Type     | Default    | Description                             |
| ------------ | -------- | ---------- | --------------------------------------- |
| `variant`    | string   | `primary`  | Visual style of the button              |
| `size`       | string   | `md`       | Controls height, padding, and font size |
| `disabled`   | boolean  | `false`    | Disables the button                     |
| `text`       | string   | `"Button"` | Button label                            |
| `onClick`    | function | `null`     | Click handler                           |
| `className`  | string   | `""`       | Additional classes                      |
| `attributes` | object   | `{}`       | Custom HTML attributes                  |

---

## Accessibility

* `role="button"` implied by native `<button>`
* `aria-label` is generated from `text` if not provided
* `aria-disabled` applied when disabled
* Focus-visible ring used for keyboard navigation

---

## Anatomy

```
[ BUTTON FRAME ]
  • Auto layout: Horizontal
  • Gap: 8px
  • Padding: depends on size
  • Alignment: center

Inside:
[ Optional Icon ] [ Label ]
```

---

## Figma Properties

```
variant = primary | secondary | ghost | outline | destructive
size = sm | md | lg | icon
state = default | hover | active | focus | disabled
```

---

## QA Checklist

* Colors match tokens exactly
* Padding matches size table
* Focus ring matches variant
* Disabled opacity = 0.5
* Icon spacing = 8px
* Radius applies based on size
* Hover and active states visually correct

---

End of Button Spec Sheet
