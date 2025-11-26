import { createContainer, renderContainer } from "./container.js";
import { renderButton } from "../button/button.js";

// 1️⃣ Create default container with a slot inside
const defaultContainer = createContainer({
  children: `
    <h1>Default Container</h1>
    <p>This is normal content.</p>
    <div class='h-30 md:h-60 lg:h-80' id='slot'></div>
  `,
});

// 2️⃣ Mount container to #container
document.querySelector("#container").appendChild(defaultContainer);

// 3️⃣ Insert real Button into #slot
renderButton("#slot", {
  variant: "primary",
  children: "Inside Container",
});


// 4️⃣ Render the rest — WITHOUT DUPLICATES
renderContainer("#container", {
  variant: "section",
  children: "<h1>Section Layout</h1><p>This has big vertical padding.</p>",
});

renderContainer("#container", {
  variant: "card",
  children: "<h2>Card Container</h2><p>Card using tokens.</p>",
});

renderContainer("#container", {
  variant: "fluid",
  children: "<h1>Fluid Width</h1><p>Always full width.</p>",
});

renderContainer("#container", {
  size: "md",
  children: "<h1>Medium Width</h1>",
});

renderContainer("#container", {
  className: "bg-red-500 text-white",
  attributes: { id: "custom-box" },
  children: "<p>Custom background</p>",
});
