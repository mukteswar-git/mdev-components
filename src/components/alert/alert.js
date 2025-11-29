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
 * 🎨 Alert Variants (CVA)
 * ------------------------------------------------------*/
export const alertVariants = cva(
  `
  flex items-start gap-3 p-2
  rounded-(--radius-sm)
  `,
  {
    variants: {
      variant: {
        alert: "",
        toast: ""
      },

      status: {
        error: "",
        warning: "",
        success: "",
        info: "",
        feature: "",
      },

      tone: {
        filled: "",
        light: "",
        lighter: "",
        stroke: "",
      },

      size: {
        default: "p-3 text-base gap-3",
        sm: "p-1.5 text-sm gap-1"
      },

      hasIcon: {
        true: "",
        false: ""
      },

      hasAction: {
        true: "",
        false: ""
      },
    },

    compoundVariants: [
    // ERROR
      { status: "error", tone: "filled", className: "bg-(--surface-error-active) text-(--text-on-color)" },
      { status: "error", tone: "light",   className: "bg-(--surface-error-muted) text-(--text-on-error)" },
      { status: "error", tone: "lighter", className: "bg-(--surface-error) text-(--text-on-surface)" },
      { status: "error", tone: "stroke",  className: "bg-transparent text-(--text-on-surface) border border-(--border-error)" },

    // WARNING
      { status: "warning", tone: "filled", className: "bg-(--surface-warning-active) text-(--text-on-color)" },
      { status: "warning", tone: "light",   className: "bg-(--surface-warning-muted) text-(--text-on-warning)" },
      { status: "warning", tone: "lighter", className: "bg-(--surface-warning) text-(--text-on-surface)" },
      { status: "warning", tone: "stroke",  className: "bg-transparent text-(--text-on-surface) border border-(--border-warning)" },

    // SUCCESS
      { status: "success", tone: "filled", className: "bg-(--surface-success-active) text-(--text-on-color)" },
      { status: "success", tone: "light",   className: "bg-(--surface-success-muted) text-(--text-on-success)" },
      { status: "success", tone: "lighter", className: "bg-(--surface-success) text-(--text-on-surface)" },
      { status: "success", tone: "stroke",  className: "bg-transparent text-(--text-on-surface) border border-(--border-success)" },

    // SUCCESS
      { status: "info", tone: "filled", className: "bg-(--surface-info-active) text-(--text-on-color)" },
      { status: "info", tone: "light",   className: "bg-(--surface-info-muted) text-(--text-on-info)" },
      { status: "info", tone: "lighter", className: "bg-(--surface-info) text-(--text-on-surface)" },
      { status: "info", tone: "stroke",  className: "bg-transparent text-(--text-on-info) border border-(--border-info)" },

    // SUCCESS
      { status: "feature", tone: "filled", className: "bg-(--surface-feature-active) text-(--text-on-color)" },
      { status: "feature", tone: "light",   className: "bg-(--surface-feature-muted) text-(--text-on-feature)" },
      { status: "feature", tone: "lighter", className: "bg-(--surface-feature) text-(--text-on-surface)" },
      { status: "feature", tone: "stroke",  className: "bg-transparent text-(--text-on-feature) border border-(--border-strong)" },
    ],

    defaultVariants: {
      variant: "alert",
      status: "error",
      tone: "filled",
      size: "default",
      hasIcon: false,
      hasDescription: false,
      hasAction: false,
    },
  }
);

/* -------------------------------------------------------
 * 🧱 AlertToast Factory Component
 * ------------------------------------------------------*/
export default function AlertToast({
  variant = "alert",
  status = "info",
  tone = "light",
  size = "default",

  icon = null,
  title = "",
  description = "",

  showAction = false,
  actionLabel = "",
  actionIcon = null,
  onAction = null,

  closeButton = null,
  className = "",
  attributes = {},
} = {}) {

  const el = document.createElement("div");

  const hasIcon = !!icon;
  const hasAction = showAction;  

  el.className = cn(
    alertVariants({
      variant,
      status,
      tone,
      size,
      hasAction,
      hasIcon,
    }),
    className
  );

  /* ---------------- ICON ---------------- */
  if (icon instanceof HTMLElement) {
    const box = document.createElement("div");

    let iconClass = "flex-shrink-0";

    // CHANGE ICON COLOR FOR LIGHTER/STROKE
    if (tone === "lighter" || tone === "stroke") {
      iconClass += ` text-(--text-${status})`;
    }

    box.className = iconClass;
    box.appendChild(icon);
    el.appendChild(box);
  }

  /* ---------------- TEXT AREA ---------------- */
  const textBox = document.createElement("div");
  textBox.className = "flex-1 min-w-0";

  const titleEl = document.createElement("div");
  titleEl.className = "font-semibold";
  titleEl.textContent = title;
  textBox.appendChild(titleEl);

  if (variant === "alert") {
    const desc = document.createElement("div");
    desc.textContent = description;
    textBox.appendChild(desc);
  }

  el.appendChild(textBox);

  /* ---------------- ACTION ---------------- */
  if (showAction) {
    const actionBox = document.createElement("div");
    actionBox.className = "ml-auto flex-shrink-0";

    const btn = document.createElement("button");
    btn.className = "underline flex items-center gap-1 cursor-pointer hover:opacity-80";
    btn.textContent = actionLabel || "";

    if (actionIcon instanceof HTMLElement) {
      btn.appendChild(actionIcon);
    }

    if (typeof onAction === "function") {
      btn.addEventListener("click", (e) => {
        e.stopPropagation();
        onAction(e);
      });
    }

    actionBox.appendChild(btn);
    el.appendChild(actionBox);
  }

  /* ---------------- CLOSE BUTTON ---------------- */
  if (closeButton instanceof HTMLElement) {
    const closeBox = document.createElement("div");
    closeBox.className = "flex-shrink-0 cursor-pointer hover:opacity-80";
    closeBox.appendChild(closeButton);
    el.appendChild(closeBox);
  }

  /* ---------------- Extra attributes ---------------- */
  Object.entries(attributes).forEach(([key, value]) =>
    el.setAttribute(key, value)
  );

  return el;
}

/* -------------------------------------------------------
 * 📌 Render Helper
 * ------------------------------------------------------*/
export function renderAlertToast(target, options) {
  const node = AlertToast(options);

  const mountPoint =
    typeof target === "string"
      ? document.querySelector(target)
      : target;

  if (mountPoint) {
    mountPoint.appendChild(node);
  }

  return node;
}
