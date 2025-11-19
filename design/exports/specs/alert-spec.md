# 🚨 Alert Component — Specification  
**MDev Design System**

---

## 1. Overview
The **Alert** component communicates system-level messages such as errors, warnings, success confirmations, and information.  
It supports:

- Title  
- Optional description  
- Inline actions  
- Secondary actions  
- Dismiss button  
- Semantic color variants  
- Multiple icon styles (Filled, Light, Lighter, Stroke)

---

## 2. Semantic Variants

Alerts follow the MDev color tokens defined in `/tokens/colors.css`.

| Variant | Background | Border | Text | Icon |
|--------|------------|--------|------|------|
| **Error** | `--surface-error` | `--border-error` | `--text-on-error` | `--icon-error` |
| **Warning** | `--surface-warning` | `--border-warning` | `--text-on-warning` | `--icon-warning` |
| **Success** | `--surface-success` | `--border-success` | `--text-on-success` | `--icon-success` |
| **Info** | `--surface-info` | `--border-info` | `--text-on-info` | `--icon-info` |
| **Inverse / Brand** | `--surface-inverse` | `--border-inverse` | `--text-on-surface` | `--icon-inverse` |

---

## 3. Icon System

MDev uses 4 icon styles:

- **Filled**  
- **Light**  
- **Lighter**  
- **Stroke**

### Icon Style Mapping

| Variant | Icon Style |
|---------|------------|
| **Error (Strong)** | **Filled** |
| **Warning (Strong)** | **Filled** |
| **Warning (Soft)** | Light / Stroke |
| **Success** | Filled or Light |
| **Info** | **Stroke** |
| **Inverse / Dark** | **Filled (white)** |

### Icon Size
- **24px** (recommended)
- Left-aligned inside header row

---

## 4. Layout Structure

Alert Container (Auto Layout – Vertical)
│
├── Header Row (Auto Layout – Horizontal)
│ ├── Icon
│ ├── Title
│ ├── Inline Action (optional)
│ └── Close Button (optional)
│
├── Description (optional)
│
└── Action Row (optional)

yaml
Copy code

---

## 5. Spacing & Sizing

### Container Padding
- `16px` (top / bottom / left / right)

### Internal Gaps
| Element | Spacing |
|---------|---------|
| Icon ↔ Title | `12px` |
| Title ↔ Description | `6px` |
| Description ↔ Actions | `12px` |
| Action ↔ Action | `16px` |

### Border Radius  
- `--radius-default` (8px)

### Width Rules
#### Inline Alerts
- **Width:** Auto  
- **Max-width:** 640px  
- **Min-height:** 64px  

#### Toast (Floating)
- **Mobile:** `calc(100% - 32px)`
- **Desktop:** 360–400px  
- **Z-index:** `var(--z-notification)`  
- **Position:** top-right (default)

---

## 6. Typography

### Title  
- Token: `text-base`  
- Weight: `semibold`  
- Color: `var(--text-on-<variant>)`

### Description  
- Token: `text-sm` (body-small)  
- Weight: regular  
- Color: `var(--text-on-<variant>)`

### Inline & Secondary Actions  
- Token: `btn-text`  
- Weight: medium  
- Style: Underline  
- Color: `var(--text-on-<variant>)`

---

## 7. Interaction Rules

### Dismiss Button
- Always visible unless explicitly disabled
- Icon size: 20–24px
- Hit area: **32 × 32px**
- Hover: `--icon-interactive-hover`
- Focus: Show focus ring

### Inline Action (e.g., Upgrade)  
- Placed in header row  
- Must remain on the same line with title

### Secondary Actions  
- Shown below description  
- Can include multiple links

---

## 8. Component States

| State | Description |
|--------|-------------|
| **Default** | Title only |
| **With Description** | Two-line message |
| **With Inline Action** | Right-aligned link |
| **With Secondary Actions** | Action row visible |
| **Dismissible** | Close icon visible |
| **Non-dismissible** | No close icon |

---

## 9. Accessibility

- Minimum text contrast: **4.5:1**
- Icons must match semantic meaning:
  - Error → exclamation-circle  
  - Warning → triangle  
  - Success → check-circle  
  - Info → information-circle
- Close button must support keyboard focus
- Full component must be screen-reader friendly

---

## 10. Example Variant (Error)

```css
background: var(--surface-error);
color: var(--text-on-error);
border: 1px solid var(--border-error);
icon-color: var(--icon-error);
padding: 16px;
border-radius: var(--radius-default);
