import { renderContainer } from "../container/container.js";

// Default container
renderContainer("#container", {
  children: "<h1>Default Container</h1><p>This is normal content.</p><div class='h-30 md:h-60 lg:h-80'></div>",
});

// Section container
renderContainer("#container", {
  variant: "section",
  children: "<h1>Section Layout</h1><p>This has big vertical padding.</p>",
});

// Card container
renderContainer("#container", {
  variant: "card",
  children: "<h2>Card Container</h2><p>Card using tokens.</p>",
});

// Fluid container
renderContainer("#container", {
  variant: "fluid",
  children: "<h1>Fluid Width</h1><p>Always full width.</p>",
});

// Custom size container
renderContainer("#container", {
  size: "md",
  children: "<h1>Medium Width</h1>",
});

// With attributes + className
renderContainer("#container", {
  className: "bg-red-500 text-white",
  attributes: { id: "custom-box" },
  children: "<p>Custom background</p>",
});
