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
 * 🏗️ CREATE INPUT COMPONENT
 * ------------------------------------------------------*/
export function createInput({
  variant = "default",
  size = "md",
  iconLeft = null,
  iconRight = null,
  className = "",
  attributes = {},
  ...props
} = {}) {

  const wrapper = document.createElement("div");

  wrapper.className = cn(
    inputVariants({
      variant,
      size,
      hasLeftIcon: !!iconLeft,
      hasRightIcon: !!iconRight,
    }),
    className
  );

  // ⭐ FIXED LEFT ICON
  if (iconLeft instanceof HTMLElement) {
    const left = document.createElement("span");
    left.className = "flex items-center text-(--icon-default)";
    left.appendChild(iconLeft);  // ← Correct
    wrapper.appendChild(left);
  }

  // Input Field
  const input = document.createElement("input");
  input.className = inputFieldClass;

  // Spread attributes
  Object.entries(props).forEach(([key, value]) => {
    input.setAttribute(key, value);
  });

  wrapper.appendChild(input);

  // ⭐ FIXED RIGHT ICON
  if (iconRight instanceof HTMLElement) {
    const right = document.createElement("span");
    right.className = "flex items-center text-(--icon-default)";
    right.appendChild(iconRight);  // ← Correct
    wrapper.appendChild(right);
  }

  // Wrapper attributes
  Object.entries(attributes).forEach(([key, value]) => {
    wrapper.setAttribute(key, value);
  });

  wrapper.setAttribute("role", "textbox");

  return wrapper;
}

/* -------------------------------------------------------
 * 🚀 RENDER INPUT
 * ------------------------------------------------------*/
export function renderInput(target, options) {
  const input = createInput(options);
  const mountPoint =
    typeof target === "string" ? document.querySelector(target) : target;

  if (mountPoint) mountPoint.appendChild(input);
  return input;
}

/* -------------------------------------------------------
 * ✔ EXPORT
 * ------------------------------------------------------*/
export default {
  inputVariants,
  inputFieldClass,
  createInput,
  renderInput,
};
