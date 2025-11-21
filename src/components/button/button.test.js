import { describe, it, expect } from "vitest";
import { buttonVariants } from "./button.js";
import Button from "./button.js";
import { renderButton } from "./button.js";

/* -------------------------------------------------------
 * TEST: buttonVariants (CVA output)
 * ------------------------------------------------------*/
describe("buttonVariants", () => {
  it("returns base styles", () => {
    const result = buttonVariants();
    expect(result).toContain("inline-flex");
    expect(result).toContain("h-8"); // base height
  });

  it("applies primary variant", () => {
    const result = buttonVariants({ variant: "primary" });
    expect(result).toContain("bg-(--surface-interactive)");
  });

  it("applies secondary variant", () => {
    const result = buttonVariants({ variant: "secondary" });
    expect(result).toContain("bg-(--surface-neutral)");
  });

  it("applies iconOnly variant", () => {
    const result = buttonVariants({ iconOnly: true });
    expect(result).toContain("w-10");
    expect(result).toContain("text-[0]");
  });
});

/* -------------------------------------------------------
 * TEST: Button DOM behavior
 * ------------------------------------------------------*/
describe("Button DOM", () => {
  it("creates a <button> element", () => {
    const btn = Button({ children: "Click" });
    expect(btn.tagName).toBe("BUTTON");
  });

  it("applies classes from CVA", () => {
    const btn = Button({ variant: "primary" });
    expect(btn.className).toContain("bg-(--surface-interactive)");
  });

  it("renders the children inside a <span>", () => {
    const btn = Button({ children: "Press Me" });
    expect(btn.innerHTML).toBe("<span>Press Me</span>");
  });

  it("applies attributes correctly", () => {
    const btn = Button({
      children: "Save",
      id: "save-btn",
      "data-role": "ok",
    });
    expect(btn.getAttribute("id")).toBe("save-btn");
    expect(btn.getAttribute("data-role")).toBe("ok");
  });
});

/* -------------------------------------------------------
 * TEST: renderButton helper
 * ------------------------------------------------------*/
describe("renderButton", () => {
  it("mounts button to DOM", () => {
    document.body.innerHTML = `<div id="test-mount"></div>`;
    renderButton("#test-mount", { children: "Rendered" });

    const mount = document.querySelector("#test-mount");
    expect(mount.innerHTML).toContain("Rendered");
  });
});
