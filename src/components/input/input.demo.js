import { renderInput } from "./input.js";
import { PlusIcon } from "../icons/index.js";

// DEFAULT
renderInput("#input-demo", { placeholder: "Enter your name" });

// ERROR
renderInput("#input-demo", {
  variant: "error",
  placeholder: "Invalid email",
});

// SUCCESS
renderInput("#input-demo", {
  variant: "success",
  placeholder: "Looks good!",
});

// DISABLED
renderInput("#input-demo", {
  variant: "disabled",
  placeholder: "Disabled",
  disabled: true,
  iconLeft: PlusIcon(),
});

// LEFT ICON
renderInput("#input-demo", {
  placeholder: "Email",
  iconLeft: PlusIcon(),
});

// RIGHT ICON
renderInput("#input-demo", {
  variant: "error",
  placeholder: "Search...",
  iconRight: PlusIcon(),
});

// BOTH ICONS
renderInput("#input-demo", {
  placeholder: "Username",
  iconLeft: PlusIcon(),
  iconRight: PlusIcon(),
});

// SIZES
renderInput("#input-demo", {
  size: "sm",
  placeholder: "Small Input",
});

renderInput("#input-demo", {
  size: "md",
  placeholder: "Medium Input",
});

renderInput("#input-demo", {
  size: "lg",
  placeholder: "Large Input",
});

renderInput("#signup-form", {
  placeholder: "Full Name"
});

renderInput("#signup-form", {
  placeholder: "Email",
  type: "email",
  variant: "error"
});

renderInput("#signup-form", {
  placeholder: "Password",
  type: "password",
  size: "lg"
});
