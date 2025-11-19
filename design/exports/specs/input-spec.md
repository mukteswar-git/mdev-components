# Input Component Specification Sheet

## Overview

The **Input** component is a core form element supporting multiple variants, sizes, icons, states, and validation patterns. It follows your token-driven design system and matches Tailwind v4 + CVA implementation.

---

## Variants

| Variant      | Background                      | Border                         | Text                   | Placeholder            | Icon Color                         | Helper Text            |
| ------------ | ------------------------------- | ------------------------------ | ---------------------- | ---------------------- | ---------------------------------- | ---------------------- |
| **Default**  | `var(--surface-input)`          | `var(--border-input)`          | `var(--text-primary)`  | `var(--text-muted)`    | `var(--icon-default)`              | `var(--text-muted)`    |
| **Error**    | `var(--surface-input)`          | `var(--border-input-error)`    | `var(--text-primary)`  | `var(--text-muted)`    | `var(--icon-error)`                | `var(--text-error)`    |
| **Success**  | `var(--surface-input)`          | `var(--border-success)`        | `var(--text-primary)`  | `var(--text-muted)`    | `var(--icon-success)`              | `var(--text-success)`  |
| **Disabled** | `var(--surface-input-disabled)` | `var(--border-input-disabled)` | `var(--text-disabled)` | `var(--text-disabled)` | `var(--icon-default)` (opacity .5) | `var(--text-disabled)` |

---

## Sizes

| Size   | Height | Padding LR | Text Style     | Radius                    | Icon Size |
| ------ | ------ | ---------- | -------------- | ------------------------- | --------- |
| **sm** | 36px   | 12px       | `.btn-text`    | `var(--radius-md)` (12px) | 18–20px   |
| **md** | 40px   | 14px       | `.btn-text`    | `var(--radius-md)` (12px) | 20–22px   |
| **lg** | 44px   | 16px       | `.btn-text-lg` | `var(--radius-lg)` (16px) | 22–24px   |

---

## States

| State        | Description                                                                                            |
| ------------ | ------------------------------------------------------------------------------------------------------ |
| **Default**  | Base styling using input tokens                                                                        |
| **Hover**    | `background: var(--surface-input-hover)`, `border: var(--border-input-hover)`                          |
| **Focus**    | `background: var(--surface-input-focus)`, `ring: 2px var(--border-input-focus)`, `border: transparent` |
| **Disabled** | Reduced contrast; no pointer events; cursor disabled                                                   |
| **Error**    | Shows red border and red helper text                                                                   |
| **Success**  | Shows green border and helper text                                                                     |

---

## Icons

Inputs allow optional icons on left or right.

### Left Icon

* Used for search, email, prefix symbols
* Icon token: `var(--icon-default)` (variant overrides apply)

### Right Icon

* Used for password visibility, clear button, suffix symbols
* Icon token: `var(--icon-default)` (variant overrides apply)

### Icon Rules

* Spacing from text: **8px**
* Icons scale based on size (see size table)
* Icons follow state-specific colors (error/success/etc.)

---

## Typography

| Element         | Style                                                 |
| --------------- | ----------------------------------------------------- |
| **Value Text**  | `.btn-text` or `.btn-text-lg`                         |
| **Placeholder** | `var(--text-muted)`                                   |
| **Helper Text** | 12–14px, `var(--text-muted)` → error/success override |

---

## Tokens Used

### Background Tokens

* `--surface-input`
* `--surface-input-hover`
* `--surface-input-focus`
* `--surface-input-disabled`

### Border Tokens

* `--border-input`
* `--border-input-hover`
* `--border-input-focus`
* `--border-input-error`
* `--border-success`
* `--border-input-disabled`

### Text Tokens

* `--text-primary`
* `--text-muted`
* `--text-disabled`
* `--text-error`
* `--text-success`

### Icon Tokens

* `--icon-default`
* `--icon-error`
* `--icon-success`

### Radius Tokens

* `--radius-md` (12px)
* `--radius-lg` (16px)

---

## Component Properties

| Prop          | Type        | Default         | Description                                      |
| ------------- | ----------- | --------------- | ------------------------------------------------ |
| `variant`     | string      | `default`       | Visual style (default, error, success, disabled) |
| `size`        | string      | `md`            | sm, md, lg                                       |
| `type`        | string      | `text`          | HTML input type: text, email, password, search   |
| `placeholder` | string      | `"Placeholder"` | Placeholder text                                 |
| `iconLeft`    | string/null | `null`          | Optional left icon                               |
| `iconRight`   | string/null | `null`          | Optional right icon                              |
| `disabled`    | boolean     | false           | Input disabled state                             |
| `value`       | string      | `""`            | Input value                                      |
| `onChange`    | function    | null            | Input change handler                             |
| `className`   | string      | ""              | Custom classes                                   |
| `attributes`  | object      | {}              | Additional HTML attributes                       |

---

## Anatomy

```
[ INPUT FRAME ]
  • Auto layout: Horizontal
  • Gap: 8px
  • Padding: size-based
  • Height: size-based
  • Radius: token-based
  • Border: variant-based
  • Background: variant-based

Inside:
[ Left Icon (optional) ] [ Placeholder / Value Text ] [ Right Icon (optional) ]

Below (optional):
[ Helper Text ]
```

---

## QA Checklist

* Height matches size table
* Radius matches token (12px or 16px)
* Focus ring always visible in focus state
* Icons aligned vertically center
* Text and placeholder colors follow token rules
* Error and success borders match tokens
* Disabled state has no interactions
* Padding is correct for each size
* Left/right icons maintain 8px spacing

---

End of Input Spec Sheet
