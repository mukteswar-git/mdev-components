import { describe, it, expect } from "vitest";
import { inputVariants, inputFieldClass, createInput } from "./input.js";

/* -------------------------------------------------------
 * 📦 TEST: inputVariants (CVA output)
 * ------------------------------------------------------*/
describe("inputVariants", () => {
  
  it("applies default variant + size", () => {
    const result = inputVariants();
    expect(result).toContain("border-(--border-input)");
    expect(result).toContain("h-10");  // md height
  });

  it("applies error variant", () => {
    const result = inputVariants({ variant: "error" });
    expect(result).toContain("border-(--border-input-error)");
  });

  it("applies success variant", () => {
    const result = inputVariants({ variant: "success" });
    expect(result).toContain("border-(--border-success)");
  });

  it("applies disabled variant", () => {
    const result = inputVariants({ variant: "disabled" });
    expect(result).toContain("bg-(--surface-input-disabled)");
    expect(result).toContain("border-(--border-input-disabled)");
  });

  it("applies size overrides", () => {
    const sm = inputVariants({ size: "sm" });
    const lg = inputVariants({ size: "lg" });

    expect(sm).toContain("h-9");
    expect(lg).toContain("h-11");
  });

  it("applies left icon padding", () => {
    const result = inputVariants({ hasLeftIcon: true });
    expect(result).toContain("pl-2");
  });

  it("applies right icon padding", () => {
    const result = inputVariants({ hasRightIcon: true });
    expect(result).toContain("pr-2");
  });
});


/* -------------------------------------------------------
 * 🧱 TEST: createInput (DOM element creation)
 * ------------------------------------------------------*/
describe("createInput", () => {

  it("creates wrapper div", () => {
    const input = createInput();
    expect(input.tagName).toBe("DIV");
  });

  it("applies variant classes", () => {
    const input = createInput({ variant: "error" });
    expect(input.className).toContain("border-(--border-input-error)");
  });

  it("creates input element inside wrapper", () => {
    const wrapper = createInput();
    const input = wrapper.querySelector("input");
    expect(input).toBeTruthy();
  });

  it("applies input field classes", () => {
    const wrapper = createInput();
    const input = wrapper.querySelector("input");
    expect(input.className).toContain("placeholder-(--text-muted)");
  });

  it("adds custom attributes to actual input field", () => {
    const wrapper = createInput({
      type: "email",
      placeholder: "Enter email",
    });

    const input = wrapper.querySelector("input");
    expect(input.getAttribute("type")).toBe("email");
    expect(input.getAttribute("placeholder")).toBe("Enter email");
  });

  it("adds attributes to wrapper div", () => {
    const wrapper = createInput({
      attributes: { id: "test-input", "data-x": "123" }
    });

    expect(wrapper.getAttribute("id")).toBe("test-input");
    expect(wrapper.getAttribute("data-x")).toBe("123");
  });

  it("adds left icon element", () => {
    const icon = document.createElement("span");
    icon.textContent = "@";

    const wrapper = createInput({ iconLeft: icon });

    const found = wrapper.querySelector("span");
    expect(found).toBeTruthy();
    expect(found.textContent).toBe("@");
  });

  it("adds right icon element", () => {
    const icon = document.createElement("span");
    icon.textContent = "✔";

    const wrapper = createInput({ iconRight: icon });

    const right = wrapper.lastElementChild;

    expect(right.tagName).toBe("SPAN");
    expect(right.textContent).toBe("✔");
  });
});
