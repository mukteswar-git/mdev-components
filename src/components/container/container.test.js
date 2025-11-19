import { describe, it, expect } from "vitest";
import { containerVariants } from "./container.js";

describe("containerVariants", () => {
  it("applies default variant and size", () => {
    const result = containerVariants();
    expect(result).toContain("max-w-screen-xl");
  });

  it("applies section variant padding", () => {
    const result = containerVariants({ variant: "section" });
    expect(result).toContain("py-16"); 
  });

  it("applies card variant styling", () => {
    const result = containerVariants({ variant: "card" });
    expect(result).toContain("shadow-sm");
    expect(result).toContain("rounded-2xl");
    expect(result).toContain("p-6");
  });

  it("applies fluid variant max width rule", () => {
    const result = containerVariants({ variant: "fluid" });
    expect(result).toContain("max-w-none");
    expect(result).toContain("px-4"); // ensures padding stays
  });

  it("applies size overrides", () => {
    const result = containerVariants({ size: "md" });
    expect(result).toContain("max-w-screen-md");
  });
});

import { createContainer } from "./container.js";

describe("createContainer", () => {
  it("creates a div element", () => {
    const container = createContainer();
    expect(container.tagName).toBe("DIV");
  });

  it("applies class names from CVA", () => {
    const container = createContainer({ variant: "section" });
    expect(container.className).toContain("py-16");
  });

  it("sets innerHTML when children is string", () => {
    const container = createContainer({ children: "<p>Hello</p>" });
    expect(container.innerHTML).toContain("Hello");
  });

  it("adds attributes correctly", () => {
    const container = createContainer({ attributes: { id: "test-box" } });
    expect(container.getAttribute("id")).toBe("test-box");
  });
});
