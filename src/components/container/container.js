/**
 * MDev Components - MIT License
 * © 2025 Mukteswar Tripathy
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this project.
 */

import { cva } from "class-variance-authority";
import cn from "../../utils/cn.js";

/**
 * Container / Section Component
 * 
 * @param {Object} options
 * @param {string} [options.variant='default'] - Visual variant ('default' | 'section' | 'fluid' | 'card')
 * @param {string} [options.size='xl'] - Max width size ('sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full')
 * @param {string} [options.className] - Additional custom classes
 * @param {HTMLElement|string} [options.children] - Inner HTML or element to append
 * @param {Object} [options.attributes] - Custom HTML attributes
 * @returns {HTMLElement} Container element
 */

const containerVariants = cva(
  "w-full",
  {
    variants: {
      variant: {
        default: "mx-auto px-4 sm:px-6 lg:px-8 bg-(--surface-base)",

        section: "mx-auto px-4 sm:px-6 lg:px-8 bg-(--surface-base) py-16 sm:py-20 lg:py-24",

        card: "mx-auto rounded-(--radius-2xl) border border-(--border-default) shadow-(--shadow-sm) bg-(--surface-base) p-6",

        fluid: "w-full !max-w-none bg-(--surface-base)", // full width
      },

      size: {
        sm: "max-w-screen-sm",
        md: "max-w-screen-md",
        lg: "max-w-screen-lg",
        xl: "max-w-screen-xl",
        "2xl": "max-w-screen-2xl",
        full: "max-w-none",
      },
    },

    defaultVariants: {
      variant: "default",
      size: "xl",
    },
  }
);

export function createContainer({
  variant = "default",
  size = "xl",
  className = "",
  children = "",
  attributes = {},
} = {}) {
  const container = document.createElement("div");
  container.className = cn(containerVariants({ variant, size }), className);

  // Add children
  if (typeof children === "string") container.innerHTML = children;
  else if (children instanceof HTMLElement) container.appendChild(children);

  // Add attributes
  Object.entries(attributes).forEach(([key, value]) => {
    container.setAttribute(key, value);
  });

  // Accessibility
  container.setAttribute("role", "region");

  return container;
}

/**
 * Render helper for quick mounting
 */
export function renderContainer(target, options) {
  const container = createContainer(options);
  const mountPoint = typeof target === "string" ? document.querySelector(target) : target;
  if (mountPoint) mountPoint.appendChild(container);
  return container;
}

export { containerVariants };
