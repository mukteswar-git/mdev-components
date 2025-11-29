/**
 * MDev Components - MIT License
 * © 2025 Mukteswar Tripathy
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this project.
 */

import { cva } from "class-variance-authority";
import cn from "../../utils/cn.js";

/* -------------------------------------------------------
 * 🎨 Button Variants (CVA)
 * ------------------------------------------------------*/
export const buttonVariants = cva(
  `
  inline-flex items-center justify-center
  gap-2 rounded-(--radius-md)
  transition-(--transition-colors)
  cursor-pointer
  focus-visible:outline-none 
  focus-visible:ring-2 
  focus-visible:ring-offset-2
  disabled:opacity-50 disabled:pointer-events-none disabled:cursor-not-allowed
  disabled:text-(--text-disabled) disabled:bg-(--surface-interactive-disabled)

  /* Typography Scaling */
  btn-text xl:btn-text-lg

  /* Responsive Padding / Sizing */
  h-8 px-3 
  md:h-10 md:px-4
  `,
  {
    variants: {
      variant: {
        primary:
          "bg-(--surface-interactive) text-(--text-on-interactive) hover:bg-(--surface-interactive-hover) active:bg-(--surface-interactive-active) focus-visible:ring-(--border-interactive)",
        secondary:
          "bg-(--surface-neutral) text-(--text-on-surface) hover:bg-(--surface-neutral-hover) active:bg-(--surface-neutral-active) focus-visible:ring-(--border-default)",
        outline:
          "border border-(--border-default) text-(--text-primary) hover:bg-(--surface-neutral-hover) active:bg-(--surface-neutral-active) focus-visible:ring-(--border-default)",
        ghost:
          "bg-transparent text-(--text-primary) hover:bg-(--surface-neutral-hover) active:bg-(--surface-neutral-active) focus-visible:ring-(--border-default)",
        destructive:
          "bg-(--surface-error) text-(--text-on-error) hover:bg-(--surface-error-muted) active:bg-(--surface-error-active) active:text-(--text-on-interactive) focus-visible:ring-(--border-error)"
      },

      iconOnly: {
        true: "w-10 h-10 p-0 text-[0] !gap-0 flex items-center justify-center rounded-full",
      },
    },

    defaultVariants: {
      variant: "primary",
      iconOnly: false,
    },
  }
);


/* -------------------------------------------------------
 * 🧱 Button Factory Component
 * ------------------------------------------------------*/
export default function Button({
  variant,
  iconOnly = false,
  className = "",
  children = "",
  iconLeft = null,
  iconRight = null,
  ...props
} = {}) {
  const btn = document.createElement("button");

  btn.className = cn(
    buttonVariants({ variant, iconOnly }),
    className
  );

  // Clear default
  btn.innerHTML = "";

  // Add left icon
  if (iconLeft instanceof HTMLElement) {
    btn.appendChild(iconLeft);
  }

  // Add text only if NOT iconOnly
  if (!iconOnly) {
    const span = document.createElement("span");
    span.innerHTML = children;
    btn.appendChild(span);
  }

  // Add right icon
  if (iconRight instanceof HTMLElement) {
    btn.appendChild(iconRight);
  }

  // Apply attributes
  Object.entries(props).forEach(([key, value]) => {
    btn.setAttribute(key, value);
  });

  return btn;
}

/* -------------------------------------------------------
 * 📌 Render Helper
 * ------------------------------------------------------*/
export function renderButton(target, options) {
  const button = Button(options);

  const mountPoint =
    typeof target === "string"
      ? document.querySelector(target)
      : target;

  if (mountPoint) {
    mountPoint.appendChild(button);
  }

  return button;
}
