import { inputVariants, inputFieldClass } from "./input.js";
import cn from "../../utils/cn.js";

/**
 * useInput — Hook-like utility for creating and controlling an input element
 *
 * This DOES NOT auto-render.
 * You must manually append the `element` to the DOM.
 *
 * Example:
 * const email = useInput({ placeholder: "Email" });
 * document.querySelector("#input-demo").appendChild(email.element);
 * email.setVariant("error");
 */

export function useInput({
  variant = "default",
  size = "md",
  value = "",
  placeholder = "",
  disabled = false,
  iconLeft = null,
  iconRight = null,
  className = "",
  attributes = {},
} = {}) {
  // Root wrapper div
  const wrapper = document.createElement("div");

  // Input element
  const input = document.createElement("input");
  input.className = inputFieldClass;
  input.value = value;
  if (placeholder) input.placeholder = placeholder;
  if (disabled) input.disabled = true;

  // Function: apply CVA classes
  function applyClasses() {
    wrapper.className = cn(
      inputVariants({
        variant,
        size,
        hasLeftIcon: !!iconLeft,
        hasRightIcon: !!iconRight,
      }),
      className
    );
  }

  applyClasses();

  // ICON HANDLING (DOM correct)
  let leftIconEl = null;
  let rightIconEl = null;

  if (iconLeft instanceof HTMLElement) {
    leftIconEl = document.createElement("span");
    leftIconEl.className = "flex items-center text-(--icon-default)";
    leftIconEl.appendChild(iconLeft);
    wrapper.appendChild(leftIconEl);
  }

  // Append input field
  wrapper.appendChild(input);

  if (iconRight instanceof HTMLElement) {
    rightIconEl = document.createElement("span");
    rightIconEl.className = "flex items-center text-(--icon-default)";
    rightIconEl.appendChild(iconRight);
    wrapper.appendChild(rightIconEl);
  }

  // Spread wrapper attributes (id, data-*)
  Object.entries(attributes).forEach(([key, value]) => {
    wrapper.setAttribute(key, value);
  });

  wrapper.setAttribute("role", "textbox");

/* -----------------------------------------
 * 🛠 Exposed Utility Methods
 * ----------------------------------------- */

function setValue(v) {
  input.value = v;
}

function setVariant(v) {
  variant = v;
  applyClasses();
}

function setDisabled(state) {
  disabled = state;
  input.disabled = state;

  if (state) {
    variant = "disabled";
  }

  applyClasses();
}

function setLeftIcon(node) {
  // Remove previous icon
  if (leftIconEl) leftIconEl.remove();

  iconLeft = node;

  if (iconLeft instanceof HTMLElement) {
    leftIconEl = document.createElement("span"); // ⭐ FIXED
    leftIconEl.className = "flex items-center text-(--icon-default)";
    leftIconEl.appendChild(iconLeft);

    // Insert BEFORE the input
    wrapper.insertBefore(leftIconEl, input); // ⭐ BETTER than append
  }

  applyClasses();
}

function setRightIcon(node) {
  // Remove previous icon
  if (rightIconEl) rightIconEl.remove();

  iconRight = node;

  if (iconRight instanceof HTMLElement) {
    rightIconEl = document.createElement("span"); // ⭐ FIXED
    rightIconEl.className = "flex items-center text-(--icon-default)";
    rightIconEl.appendChild(iconRight);

    wrapper.appendChild(rightIconEl);
  }

  applyClasses();
}

return {
  element: wrapper, // <div> wrapper
  input,            // inner <input>

  // Controls
  setValue,
  setVariant,
  setDisabled,
  setLeftIcon,
  setRightIcon,
};

}

export default useInput;
