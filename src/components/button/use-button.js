import { renderButton } from "./button.js";
import { PlusIcon } from "../icons/index.js";

// PRIMARY
renderButton("#button-demo", {
  variant: "primary",
  children: "Primary",
  iconLeft: PlusIcon(),
  iconRight: PlusIcon(),
});

// SECONDARY
renderButton("#button-demo", {
  variant: "secondary",
  children: "Secondary",
  iconLeft: PlusIcon(),
  iconRight: PlusIcon(),
});

// GHOST
renderButton("#button-demo", {
  variant: "ghost",
  children: "Ghost",
  iconLeft: PlusIcon(),
  iconRight: PlusIcon(),
});

// OUTLINE
renderButton("#button-demo", {
  variant: "outline",
  children: "Outline",
  iconLeft: PlusIcon(),
  iconRight: PlusIcon(),
});

// DESTRUCTIVE
renderButton("#button-demo", {
  variant: "destructive",
  children: "Delete",
  iconLeft: PlusIcon(),
  iconRight: PlusIcon(),
});

// DISABLED
renderButton("#button-demo", {
  variant: "primary",
  children: "Disabled",
  iconLeft: PlusIcon(),
  iconRight: PlusIcon(),
  disabled: true,
});

// ICON ONLY BUTTON (PRIMARY)
renderButton("#button-demo", {
  variant: "primary",
  iconOnly: true,
  iconLeft: PlusIcon(),
});

// ICON ONLY BUTTON (SECONDARY)
renderButton("#button-demo", {
  variant: "secondary",
  iconOnly: true,
  iconLeft: PlusIcon(),
});

// ICON ONLY BUTTON (GHOST)
renderButton("#button-demo", {
  variant: "ghost",
  iconOnly: true,
  iconLeft: PlusIcon(),
});

// ICON ONLY BUTTON (OUTLINE)
renderButton("#button-demo", {
  variant: "outline",
  iconOnly: true,
  iconLeft: PlusIcon(),
});

// ICON ONLY BUTTON (DESTRUCTIVE)
renderButton("#button-demo", {
  variant: "destructive",
  iconOnly: true,
  iconLeft: PlusIcon(),
});

// ICON ONLY BUTTON (DISABLED)
renderButton("#button-demo", {
  variant: "primary",
  iconOnly: true,
  iconLeft: PlusIcon(),
  disabled: true,
});
