# MDev Component Library

A modern, token-driven UI component library built using **Vanilla JavaScript**, **Tailwind CSS v4**, and **Class Variance Authority (CVA)**.  
This project follows a Figma-first workflow with design tokens and specifications directly mapped into components.

---

## Features

- Complete design token system (colors, spacing, shadows, radius, typography)
- Reusable and variant-based components using CVA
- Works with Tailwind CSS v4 (utility class variables)
- Supports dark/light theme via CSS variables
- Modular component architecture
- Figma-to-Code design workflow included
- Example showcase pages included
- MIT licensed

---

## Installation

Clone the repository:

```bash
git clone https://github.com/mukteswar-git/mdev-components.git

cd mdev-components

Install dependencies:

  npm install

Start development server:

  npm run dev

Project Structure

  component-library/
  ├── design/
  │   ├── exports/
  │   │   ├── icons/
  │   │   ├── images/
  │   │   └── specs/
  │   │  
  │   ├── figma/
  │   │   ├── design-tokens.json
  │   │   ├── component-specs.md
  │   │   └── figma-links.md
  │   │
  ├── docs/
  │   ├── component-guidelines.md
  │
  │
  src/
  ├── styles/
  │   ├── tokens/
  │   │   ├── colors.css
  │   │   ├── typography.css
  │   │   ├── borders.css
  │   │   ├── shadows.css
  │   │   ├── layout.css
  │   │   └── transitions.css
  │   │
  │   ├── base.css
  │   └── components.css
  │
  ├── components/
  │   ├── alert/alert.js
  │   ├── button/button.js
  │   ├── input/input.js
  │   ├── card/card.js
  │   ├── container/container.js
  │   ├── navbar/navbar.js
  │   ├── footer/footer.js
  │   ├── modal/modal.js
  │   └── index.js
  │
  ├── utils/
  │   └── cn.js
  │
  └── main.css
  │
  └── main.js

Usage Examples

  Button

    import { Button } from "./components/index.js";

    const btn = Button({
      variant: "primary",
      children: "Click Me",
    });

    document.body.appendChild(btn);

  Input

    import { renderInput } from "./components/input/input.js";
    import { SearchIcon } from "./icons/index.js";

    renderInput("#form", {
      placeholder: "Search...",
      iconLeft: SearchIcon(),
    });
      
  Alert

    import { renderAlertToast } from "./components/alert/alert.js";
    import { CheckCircleIcon, XMarkIcon } from "./icons/index.js";

    renderAlertToast("#alert-area", {
      status: "success",
      tone: "stroke",
      title: "Success",
      description: "Your changes have been saved.",
      icon: CheckCircleIcon(),
      closeButton: XMarkIcon()
    });

Roadmap

  Phase 1 – Foundation (Completed)

    1. Design tokens
    2. Button component
    3. Input component
    4. Container component
    5. Navbar component
    6. Footer component
    7. Alert & Toast component
    8. Utilities (cn.js)
    9. Project documentation

  Phase 2 – Form Components (Upcoming)

    10. Textarea
    11. Select (native + custom)
    12. Checkbox
    13. Radio
    14. Toggle
    15. File input
    16. Form error helpers

  Phase 3 – Navigation & Feedback

    17. Modal
    18. Tooltip
    19. Popover
    20. Tabs
    21. Dropdown

  Phase 4 – Data Display

    22. Table
    23. Pagination
    24. Skeleton
    25. Avatar
    26. Grid/List components

  Phase 5 – Marketing Components

    27. Hero section
    28. Pricing cards
    29. Testimonials
    30. FAQ
    31. Call-to-Action banners

License
  This project is licensed under the MIT License.
  See the LICENSE file for details.

Author
  Developed by Mukteswar Tripathy.

For feedback or suggestions, feel free to open an issue or submit a pull request.
