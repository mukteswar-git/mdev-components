/**
 * MDev Components - MIT License
 * © 2025 Mukteswar Tripathy
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this project.
 */

import { cva } from "class-variance-authority";
import cn from "../../utils/cn.js";
import Button from "../button/button.js";

/* -------------------------
 * Card CVA
 * ------------------------ */
export const cardVariants = cva (
  `
  rounded-(--radius-lg)
  flex flex-col
  transition-(--transition-all)
  cursor-pointer
  group
  `,
  {
    variants: {
      variant: {
        elevated: `
          bg-(--surface-raised)
          shadow-(--shadow-md)
          hover:shadow-(--shadow-lg)
          active:shadow-(--shadow-sm)
        `,
        outline: `
          bg-(--surface-base)
          border border-(--border-default)
          hover:border-(--border-interactive-hover)
          active:border-(--border-interactive-active) 
        `,
        filled: `
          bg-(--surface-accent)
          hover:shadow-(--shadow-sm)
          hover:bg-(--surface-interactive-hover)
          active:bg-(--surface-interactive-active)
        `,
        subtle: `
          bg-(--surface-raised)
          shadow-(--shadow-xs)
          hover:shadow-(--shadow-sm)
          active:bg-(--surface-interactive-hover)
        `,
      },

      padding: {
        sm: "p-4",
        md: "p-5",
        lg: "p-6"
      },

      state: {
        default: "",  
        disabled: `
          opacity-50
          cursor-not-allowed
          pointer-events-none
          bg-(--surface-input-disabled)
          border-(--border-input-disabled)
          shadow-none
        `,
      },

      size: {
        sm: "w-[360px]",
        md: "w-[380px]",
        lg: "w-[400px]",
        full: "w-full"    
      },

      align: {
        left: "text-left items-start",
        center: "text-left items-center",
      }
    },

    defaultVariants: {
      variant: "elevated",
      padding: "sm",
      state: "default",
      size: "sm",
      align: "center",
    }
  }
);

/* -------------------------
 * Card Component
 * ------------------------ */
export default function Card({
  variant = "elevated",
  padding = "sm",
  state = "default",
  size = "sm",
  align = "center",
  title = "",
  body = "",
  button = "",
  buttonProps = {},
  className = "",
} = {}) {

  // Create card
  const card = document.createElement("div");
  card.className = cn(
    cardVariants({ variant, padding, state, size, align }),
    className
  );

  const isDisabled = state === "disabled";

  // Card title 
  if (title) {
    const h = document.createElement("h3");
    h.className =
      variant === "filled" && !isDisabled
        ? "text-(--text-on-color)"
        : variant === "subtle"
        ? "group-active:text-(--text-on-color)"
        : "";
    h.textContent = title;
    card.appendChild(h);
  }

  // Card body
  if (body) {
    const p = document.createElement("p");
    p.className =
      variant === "filled" && !isDisabled
        ? "text-(--text-on-color)"
        : variant === "subtle"
        ? "group-active:text-(--text-on-color)"
        : "";
    p.textContent = body;
    card.appendChild(p);
  }

  // Elevated button
  if (variant === "elevated" && button) {
    card.appendChild(
      Button({
        children: button,
        variant: "primary",
        ...buttonProps
      })
    );
  }

  // Elevated button
  if (variant === "outline" && button) {
    card.appendChild(
      Button({
        children: button,
        variant: "primary",
        ...buttonProps
      })
    );
  }

  // Filled button
  if (variant === "filled" && button) {
    card.appendChild(
      Button({
        children: button,
        variant: isDisabled ? "primary" : "secondary",                        // add this too
        ...buttonProps
      })
    );
  }


  // Subtle button (with active interaction)
  if (variant === "subtle" && button) {
    let subtleBtn = Button({
      children: button,
      variant: "primary",
      ...buttonProps
    });

    card.appendChild(subtleBtn);

    // Active → secondary
    card.addEventListener("mousedown", () => {
      const newBtn = Button({
        children: button,
        variant: "secondary",
        ...buttonProps
      });
      card.replaceChild(newBtn, subtleBtn);
      subtleBtn = newBtn;
    });

    // Reset → primary
    function resetButton() {
      const newBtn = Button({
        children: button,
        variant: "primary",
        ...buttonProps
      });
      card.replaceChild(newBtn, subtleBtn);
      subtleBtn = newBtn;
    }

    card.addEventListener("mouseup", resetButton);
    card.addEventListener("mouseleave", resetButton);
  }

  return card;
}

/* -------------------------
 * renderCard helper
 * ------------------------ */
export function renderCard(target, options) {
  const card = Card(options);
  const mount = typeof target === "string"
    ? document.querySelector(target)
    : target;

  if (mount) mount.appendChild(card);
  return card;
}