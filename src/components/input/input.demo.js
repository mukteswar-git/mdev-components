import { renderInput } from "./input.js";
import { PlusIcon } from "../icons/index.js";

/* -------------------------------------------------------
 * BASIC VARIANTS
 * ------------------------------------------------------*/

renderInput("#input-demo", {
  placeholder: "Default Input",
});

renderInput("#input-demo", {
  variant: "error",
  placeholder: "Error Input",
});

renderInput("#input-demo", {
  variant: "success",
  placeholder: "Success Input",
});

renderInput("#input-demo", {
  variant: "disabled",
  disabled: true,
  placeholder: "Disabled Input",
  iconLeft: PlusIcon(),
});


/* -------------------------------------------------------
 * ICON INPUTS
 * ------------------------------------------------------*/

renderInput("#input-demo", {
  placeholder: "Left Icon",
  iconLeft: PlusIcon(),
});

renderInput("#input-demo", {
  placeholder: "Right Icon",
  iconRight: PlusIcon(),
});

renderInput("#input-demo", {
  placeholder: "Both Icons",
  iconLeft: PlusIcon(),
  iconRight: PlusIcon(),
});


/* -------------------------------------------------------
 * SIZES
 * ------------------------------------------------------*/

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
