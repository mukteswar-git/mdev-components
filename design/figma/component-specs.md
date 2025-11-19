# Component Specs

This document consolidates the design and development specifications for core components in the MDev Component Library.

## Phase 1 Components

### 1. Container / Section
- Base layout wrapper
- Provides max-width, padding, alignment utilities

### 2. Button
- Variants: primary, secondary, ghost, outline, destructive
- Sizes: sm, md, lg, icon
- Uses CVA for variant management

### 3. Input
- States: default, hover, focus, error, disabled
- Supports label, helper text, validation

### 4. Card
- Layout: media, title, description, actions
- Elevation options via shadow tokens

### 5. Navbar
- Fixed or static
- Supports navigation links, logo, actions

### 6. Footer
- Sections: brand, navigation, social, legal

### 7. Alert / Toast
- Types: success, error, warning, info
- Supports icons and auto-dismiss

## Design Tokens Referenced
- Colors
- Typography
- Borders
- Shadows
- Layout
- Transitions

Refer to individual component spec files for detailed props and examples.
