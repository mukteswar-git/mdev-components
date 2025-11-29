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
 * 📦 INPUT VARIANTS (CVA)
 * ------------------------------------------------------*/
export const inputVariants = cva(
  [
    "w-full flex items-center gap-2",
    "border",
    "text-(--text-primary)",
    "transition-all duration-200",
    "focus-within:ring-2 focus-within:border-transparent",
    "disabled:opacity-60 disabled:cursor-not-allowed",
  ].join(" "),
  {
    variants: {
      variant: {
        default: `
          border-(--border-input)
          bg-(--surface-input)
          focus-within:ring-(--border-input-focus)
        `,
        error: `
          border-(--border-input-error)
          focus-within:ring-(--border-input-error)
        `,
        success: `
          border-(--border-success)
          focus-within:ring-(--border-success)
        `,
        disabled: `
          bg-(--surface-input-disabled)
          border-(--border-input-disabled)
          text-(--text-disabled)
          focus-within:ring-0
        `,
      },

      size: {
        sm: "h-9 px-3 rounded-(--radius-md) text-[0.8125rem]",
        md: "h-10 px-3.5 rounded-(--radius-md) text-base md:h-11 md:px-4",
        lg: "h-11 px-4 rounded-(--radius-lg) text-[1rem] md:h-12 md:px-5",
      },

      hasLeftIcon: {
        true: "pl-2",
        false: "",
      },

      hasRightIcon: {
        true: "pr-2",
        false: "",
      },
    },

    defaultVariants: {
      variant: "default",
      size: "md",
      hasLeftIcon: false,
      hasRightIcon: false,
    },
  }
);

/* -------------------------------------------------------
 * 🧩 INPUT FIELD CLASS
 * ------------------------------------------------------*/
export const inputFieldClass =
  "w-full bg-transparent outline-none placeholder-(--text-muted) disabled:cursor-not-allowed";

/* -------------------------------------------------------
 * 🧱 INPUT COMPONENT (like Card.js)
 * ------------------------------------------------------*/
export default function Input({
  variant = "default",
  size = "md",
  placeholder = "",
  value = "",
  disabled = false,
  iconLeft = null,
  iconRight = null,
  className = "",
  inputProps = {},
  wrapperProps = {},
} = {}) {
  
  const wrapper = document.createElement("div");

  wrapper.className = cn(
    inputVariants({
      variant: disabled ? "disabled" : variant,
      size,
      hasLeftIcon: !!iconLeft,
      hasRightIcon: !!iconRight,
    }),
    className
  );

  /* -------------------------
   * LEFT ICON
   * ------------------------ */
  if (iconLeft instanceof HTMLElement) {
    const left = document.createElement("span");
    left.className = "flex items-center text-(--icon-default)";
    left.appendChild(iconLeft);
    wrapper.appendChild(left);
  }

  /* -------------------------
   * INPUT FIELD
   * ------------------------ */
  const input = document.createElement("input");
  input.className = inputFieldClass;

  if (placeholder) input.placeholder = placeholder;
  if (value) input.value = value;
  if (disabled) input.disabled = true;

  // Apply inputProps properly
  Object.entries(inputProps).forEach(([key, value]) => {
    if (value !== undefined && value !== null) {
      input.setAttribute(key, value);
    }
  });

  wrapper.appendChild(input);

  /* -------------------------
   * RIGHT ICON
   * ------------------------ */
  if (iconRight instanceof HTMLElement) {
    const right = document.createElement("span");
    right.className = "flex items-center text-(--icon-default)";
    right.appendChild(iconRight);
    wrapper.appendChild(right);
  }

  /* -------------------------
   * WRAPPER PROPS
   * ------------------------ */
  Object.entries(wrapperProps).forEach(([key, value]) => {
    wrapper.setAttribute(key, value);
  });

  wrapper.setAttribute("role", "textbox");

  return wrapper;
}

/* -------------------------------------------------------
 * 🚀 RENDER INPUT
 * ------------------------------------------------------*/
export function renderInput(target, options = {}) {
  const input = Input(options);
  const mount =
    typeof target === "string"
      ? document.querySelector(target)
      : target;

  if (mount) mount.appendChild(input);
  return input;
}
