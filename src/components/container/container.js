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
  // Base: width + horizontal responsive padding + center alignment
  "mx-auto w-full transition-colors duration-200 px-4 sm:px-6 lg:px-8",
  {
    variants: {
      variant: {
        default: "", // No vertical padding for default
        section: "py-16 sm:py-20 lg:py-24", // Large vertical padding
        card: "rounded-2xl border border-gray-200 bg-white shadow-sm p-6", // Matches spec
        fluid: "max-w-none px-4 sm:px-6 lg:px-8", // Always full width but keeps padding
      },
      size: {
        sm: "max-w-screen-sm",
        md: "max-w-screen-md",
        lg: "max-w-screen-lg",
        xl: "max-w-screen-xl",
        "2xl": "max-w-screen-2xl",
        full: "max-w-full",
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
