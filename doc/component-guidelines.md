# Component Development Guidelines

Last Updated: [Date]
Version: 1.0

---

## Table of Contents
1. [File Structure](#file-structure)
2. [Naming Conventions](#naming-conventions)
3. [Props Standards](#props-standards)
4. [State Management](#state-management)
5. [Styling with CVA](#styling-with-cva)
6. [Event Handlers](#event-handlers)
7. [Accessibility](#accessibility)
8. [Component Template](#component-template)
9. [Testing Requirements](#testing-requirements)
10. [Documentation Standards](#documentation-standards)

---

## 1. File Structure

### Single File Components
components/
├── badge/
│   └── badge.js

### Multi-File Components
components/
├── button/
│   ├── button.js           # Main component
│   ├── button-icon.js      # Variant (if complex enough)
│   ├── button.test.js      # Tests
│   └── README.md           # Component docs

---

## 2. Naming Conventions

### Component Functions
✅ CORRECT:
- `createButton()`
- `createCard()`
- `createModal()`

❌ INCORRECT:
- `makeButton()`
- `Button()`
- `newCard()`

### File Names
✅ CORRECT:
- `button.js`
- `input-password.js`
- `modal-header.js`

❌ INCORRECT:
- `Button.js`
- `inputPassword.js`
- `ModalHeader.js`

### CSS Classes (BEM-inspired)
✅ CORRECT:
- `.button`
- `.button--primary`
- `.button--disabled`
- `.modal__header`

❌ INCORRECT:
- `.btn`
- `.primaryButton`
- `.button_disabled`

---

## 3. Props Standards

### Prop Naming Rules

#### Boolean Props
Always use `is` prefix for state, NO prefix for attributes:

✅ CORRECT:
disabled: boolean        // HTML attribute
loading: boolean         // Action state
isOpen: boolean         // Component state
isActive: boolean       // Component state
isSelected: boolean     // Component state

❌ INCORRECT:
isDisabled: boolean     // ❌ Use 'disabled'
isLoading: boolean      // ❌ Use 'loading'
open: boolean           // ❌ Use 'isOpen'

#### Event Handler Props
Always use `on` prefix:

✅ CORRECT:
onClick: Function
onChange: Function
onSubmit: Function
onClose: Function
onOpen: Function

❌ INCORRECT:
clickHandler: Function
handleClick: Function
clicked: Function

#### Content Props
Use semantic names:

✅ CORRECT:
text: string           // Button text
title: string          // Card title
description: string    // Card description
children: Node         // React-style children
label: string          // Form label

❌ INCORRECT:
content: string        // Too generic
value: string          // Too generic
data: any              // Too generic

#### Configuration Props
Use descriptive names:

✅ CORRECT:
variant: 'primary' | 'secondary' | 'ghost'
size: 'sm' | 'md' | 'lg'
position: 'top' | 'bottom' | 'left' | 'right'
alignment: 'start' | 'center' | 'end'

❌ INCORRECT:
type: string           // Too generic
style: string          // Confusing (CSS style?)
config: object         // Too vague

### Required Props Pattern

/**
 * @param {Object} options - Component configuration
 * @param {string} options.text - Button text (REQUIRED)
 * @param {string} [options.variant='primary'] - Button variant (OPTIONAL with default)
 * @param {string} [options.size='md'] - Button size (OPTIONAL with default)
 * @param {string} [options.className] - Additional CSS classes (OPTIONAL)
 * @param {boolean} [options.disabled=false] - Disabled state (OPTIONAL with default)
 * @param {Function} [options.onClick] - Click handler (OPTIONAL)
 */

---

## 4. State Management

### Internal State
Store component state in closures or WeakMaps:

✅ CORRECT:
const componentStates = new WeakMap();

export function createModal(options) {
  const state = {
    isOpen: options.isOpen ?? false,
    isDismissible: options.isDismissible ?? true
  };
  
  const modal = document.createElement('div');
  componentStates.set(modal, state);
  
  return modal;
}

❌ INCORRECT:
let globalIsOpen = false; // ❌ Global state

export function createModal(options) {
  modal.isOpen = true; // ❌ DOM pollution
}

### State Update Functions
Provide state updaters:

export function createModal(options) {
  const modal = document.createElement('div');
  
  // Public API for state updates
  modal.open = () => {
    // Update internal state
    // Trigger render
  };
  
  modal.close = () => {
    // Update internal state
    // Trigger render
  };
  
  return modal;
}

### Reactive Updates
Re-render on state change:

function render(element, state) {
  element.className = cn(
    modalVariants({ isOpen: state.isOpen }),
    state.className
  );
}

modal.open = () => {
  const state = componentStates.get(modal);
  state.isOpen = true;
  render(modal, state);
};

---

## 5. Styling with CVA

### Variant Definition Structure

const componentVariants = cva(
  // 1. Base classes (always applied)
  'base-class-1 base-class-2',
  {
    variants: {
      // 2. Visual variants
      variant: {
        primary: 'bg-blue-600 text-white',
        secondary: 'bg-gray-200 text-gray-900',
      },
      
      // 3. Size variants
      size: {
        sm: 'px-3 py-1.5 text-sm',
        md: 'px-4 py-2 text-base',
        lg: 'px-6 py-3 text-lg',
      },
      
      // 4. State variants (if simple)
      state: {
        disabled: 'opacity-50 cursor-not-allowed',
        loading: 'opacity-75 cursor-wait',
      }
    },
    
    // 5. Compound variants (when combinations matter)
    compoundVariants: [
      {
        variant: 'ghost',
        size: 'sm',
        className: 'px-2' // Ghost small needs tighter padding
      }
    ],
    
    // 6. Default variants
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    }
  }
);

### Variant Naming Rules

✅ CORRECT:
variant: 'primary' | 'secondary' | 'ghost' | 'outline' | 'destructive'
size: 'sm' | 'md' | 'lg' | 'xl'
color: 'blue' | 'red' | 'green'

❌ INCORRECT:
variant: 'main' | 'second' | 'transparent' // ❌ Inconsistent
size: 'small' | 'medium' | 'large'         // ❌ Use abbreviations
color: 'primary' | 'secondary'             // ❌ Don't mix concepts

### Using Design Tokens

✅ CORRECT (Use Tailwind classes that map to tokens):
'bg-blue-600'        // → Uses --color-primary-600
'text-gray-900'      // → Uses --color-neutral-900
'rounded-md'         // → Uses --border-radius-md
'shadow-lg'          // → Uses --shadow-lg

❌ INCORRECT (Don't use arbitrary values unless necessary):
'bg-[#3B82F6]'       // ❌ Use token-based class
'text-[18px]'        // ❌ Use size token
'rounded-[8px]'      // ❌ Use border token

---

## 6. Event Handlers

### Event Handler Patterns

✅ CORRECT:
// Pattern 1: Direct callback
export function createButton({ onClick, ...options }) {
  const button = document.createElement('button');
  
  if (onClick) {
    button.addEventListener('click', (event) => {
      if (!button.disabled) {
        onClick(event, button);
      }
    });
  }
  
  return button;
}

// Pattern 2: Custom events
export function createModal(options) {
  const modal = document.createElement('div');
  
  modal.open = () => {
    modal.dispatchEvent(new CustomEvent('modalOpen', {
      detail: { timestamp: Date.now() }
    }));
  };
  
  return modal;
}

❌ INCORRECT:
// ❌ Don't inline event logic
button.onclick = () => { /* complex logic */ };

// ❌ Don't use global callbacks
window.onButtonClick = () => {};

### Event Handler Arguments
Always pass event first, element second:

✅ CORRECT:
onClick(event, button)
onChange(event, input)
onSubmit(event, form)

❌ INCORRECT:
onClick(button, event)
onChange(inputValue)

---

## 7. Accessibility

### ARIA Attributes (Always Required)

✅ CORRECT:
button.setAttribute('aria-label', options.ariaLabel || options.text);
button.setAttribute('aria-disabled', disabled ? 'true' : 'false');
input.setAttribute('aria-invalid', hasError ? 'true' : 'false');
modal.setAttribute('role', 'dialog');
modal.setAttribute('aria-modal', 'true');

### Keyboard Navigation (Required for Interactive Components)

✅ CORRECT:
button.addEventListener('keydown', (e) => {
  if (e.key === 'Enter' || e.key === ' ') {
    e.preventDefault();
    button.click();
  }
});

### Focus Management

✅ CORRECT:
button.classList.add('focus-visible:ring-2', 'focus-visible:ring-offset-2');

---

## 8. Component Template

Save this as: `docs/component-template.js`

/**
 * ComponentName Component
 * 
 * @description Brief description of what this component does
 * @example
 * const myComponent = createComponentName({
 *   variant: 'primary',
 *   size: 'md',
 *   text: 'Click Me'
 * });
 */

import { cva } from 'class-variance-authority';
import { cn } from '../../utils/cn.js';

// ===================================
// VARIANTS
// ===================================

const componentNameVariants = cva(
  // Base classes
  'base-class',
  {
    variants: {
      variant: {
        primary: 'variant-class',
        secondary: 'variant-class',
      },
      size: {
        sm: 'size-class',
        md: 'size-class',
        lg: 'size-class',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  }
);

// ===================================
// COMPONENT
// ===================================

/**
 * Creates a ComponentName element
 * 
 * @param {Object} options - Component configuration
 * @param {string} options.variant - Visual variant
 * @param {string} options.size - Size variant
 * @param {string} [options.className] - Additional CSS classes
 * @param {Function} [options.onClick] - Click handler
 * @param {Object} [options.attributes] - Additional HTML attributes
 * @returns {HTMLElement} The component element
 */
export function createComponentName({
  variant = 'primary',
  size = 'md',
  className = '',
  onClick = null,
  attributes = {},
  ...rest
} = {}) {
  // Create element
  const element = document.createElement('div');
  
  // Apply classes
  element.className = cn(
    componentNameVariants({ variant, size }),
    className
  );
  
  // Add event listeners
  if (onClick) {
    element.addEventListener('click', (event) => onClick(event, element));
  }
  
  // Add custom attributes
  Object.entries(attributes).forEach(([key, value]) => {
    element.setAttribute(key, value);
  });
  
  // Accessibility
  element.setAttribute('role', 'appropriate-role');
  
  return element;
}

/**
 * Helper to render component directly into DOM
 * 
 * @param {string|HTMLElement} target - CSS selector or DOM element
 * @param {Object} options - Component configuration
 * @returns {HTMLElement} The rendered component
 */
export function renderComponentName(target, options) {
  const component = createComponentName(options);
  const container = typeof target === 'string' 
    ? document.querySelector(target)
    : target;
  
  if (container) {
    container.appendChild(component);
  }
  
  return component;
}

// Export variants for external use
export { componentNameVariants };

---

## 9. Testing Requirements

### Unit Tests (Required for all components)
- Test all variants render correctly
- Test event handlers fire
- Test accessibility attributes
- Test edge cases (null, undefined, empty strings)

### Example Test Structure
// button.test.js
describe('Button Component', () => {
  test('renders with default variant', () => {
    const button = createButton({ text: 'Click' });
    expect(button.textContent).toBe('Click');
  });
  
  test('applies correct variant classes', () => {
    const button = createButton({ variant: 'primary' });
    expect(button.className).toContain('bg-blue-600');
  });
  
  test('calls onClick handler', () => {
    const mockFn = jest.fn();
    const button = createButton({ onClick: mockFn });
    button.click();
    expect(mockFn).toHaveBeenCalled();
  });
});

---

## 10. Documentation Standards

### JSDoc Comments (Required)
All exported functions must have JSDoc comments.

### README.md (Required for complex components)
Each component folder should have:

# ComponentName

## Usage
\`\`\`javascript
import { createComponentName } from './components/component-name/component-name.js';

const component = createComponentName({
  variant: 'primary',
  size: 'md'
});
\`\`\`

## Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| variant | string | 'primary' | Visual variant |
| size | string | 'md' | Size variant |

## Examples
[Visual examples or CodePen links]

---

## Checklist Before Committing

- [ ] Component follows naming conventions
- [ ] Props follow standards
- [ ] CVA variants properly structured
- [ ] Accessibility attributes added
- [ ] Event handlers follow pattern
- [ ] JSDoc comments complete
- [ ] Tests written and passing
- [ ] README updated (if applicable)