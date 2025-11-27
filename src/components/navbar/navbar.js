import { cva } from "class-variance-authority";
import cn from "../../utils/cn.js";
import { MenuIcon, XMarkIcon } from "../icons/index.js";

/* -------------------------------------------------------
 * 🎨 NAVBAR VARIANTS (CVA)
 * - mobile: stacked (flex-col), desktop: row (md:flex-row)
 * ------------------------------------------------------*/
export const navbarVariants = cva(
  `
  w-full
  flex flex-col md:flex-row md:items-center
  bg-(--surface-raised)
  `,
  {
    variants: {
      variant: {
        default: ""
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);

/* -------------------------------------------------------
 * 🧱 NAVBAR FACTORY FUNCTION
 * ------------------------------------------------------*/
export default function Navbar({
  variant = "default",
  className = "",
  logoImage = "/src/assets/images/mdev.png",
  logoText = "MDev",
  navLinks = [],
  actions = [],
} = {}) {
  /* -----------------------------------------
  * HEADER
  * ----------------------------------------- */
  const header = document.createElement("header");
  header.className = `
    sticky top-0 z-50
    bg-(--surface-raised)
    transition-shadow duration-300
  `;

  // Nav bar
  const nav = document.createElement("nav");
  nav.className = cn(navbarVariants({ variant }), className);

  //Header Row
  const headerRow = document.createElement("div");
  headerRow.className=`
    w-full flex items-center
    bg-(--surface-raised)
    shadow-(--shadow-sm)
  `;

  /* -----------------------------------------
  * LOGO 
  * ----------------------------------------- */
  const logoLink = document.createElement("a");
  logoLink.href = "/"; 
  logoLink.className = `
    flex items-center 
    no-underline
    gap-1 p-1 
    md:gap-1.5 md:p-1.5 
    lg:gap-2 lg:p-2
  `;

  // Logo image size
  const imageSize = `
    w-7 h-7
    md:w-9 md:h-9
    lg:w-12 lg:h-12
  `;

  // Logo image element
  const img = document.createElement("img");
  img.src = logoImage;
  img.alt = "logo";
  img.className = `
    ${imageSize}
    rounded-full object-cover border-(--border-default)
  `;

  // append image to link
  logoLink.appendChild(img);

  // if text exists – make it clickable too
  if (logoText) {
    const title = document.createElement("h2");
    title.textContent = logoText;
    title.className = `
      mb-0 leading-none 
      text-xl md:text-2xl lg:text-4xl
    `;
    logoLink.appendChild(title);
  }

  // append logo to header
  headerRow.appendChild(logoLink);

  /* -----------------------------------------
  * NAV LINKS 
  * ----------------------------------------- */
  // Links container
  const links = document.createElement("div");
  links.className = "hidden md:flex items-center gap-6 ml-auto mr-10";

  // Link behavior
  navLinks.forEach(link => {
    const a = document.createElement("a");
    a.href = link.href || "#";
    a.textContent = link.label;

    a.className = `
      relative
      text-base font-medium
      text-(--text-interactive)
      hover:text-(--text-interactive-hover)
      active:text-(--text-interactive-active)
      no-underline
      transition-all duration-200
      after:content-['']
      after:absolute after:left-[-4px] after:bottom-0
      after:h-[2px] after:w-[calc(100%+8px)]
      after:bg-(--text-interactive)
      after:scale-x-0
      after:origin-left
      after:transition-transform
      after:duration-300
      after:ease-in-out
      hover:after:scale-x-100
    `;

    // append all links to link container
    links.appendChild(a);
  });

  // append links to header container
  headerRow.appendChild(links);

  /* -----------------------------------------
  * CTA BUTTONS
  * ----------------------------------------- */
  const ctaNav = document.createElement("div");
  ctaNav.className = "hidden md:flex items-center gap-3 mr-4";

  actions.forEach(action => {
    if (action instanceof HTMLElement) ctaNav.appendChild(action);
  });

  // append buttons to header
  headerRow.appendChild(ctaNav);

  /* -----------------------------------------
  * MOBILE MENU PANEL
  * ----------------------------------------- */
  const mobilePanel = document.createElement("div");
  mobilePanel.className = `
    md:hidden
    w-full
    flex flex-col
    gap-6
    transition-[max-height] duration-200 ease-in-out
    overflow-hidden
    max-h-0
  `;
  mobilePanel.style.maxHeight = "0px"; 

  // Add nav links
  navLinks.forEach(link => {
    const a = document.createElement("a");
    a.href = link.href || "#";
    a.textContent = link.label;
    a.className = `
      relative
      text-base font-medium
      text-(--text-interactive)
      hover:text-(--text-interactive-hover)
      active:text-(--text-interactive-active)
      no-underline
      transition-all duration-200
      after:content-['']
      after:absolute after:left-[-4px] after:bottom-0
      after:h-[2px] after:w-[calc(100%+8px)]
      after:bg-(--text-interactive)
      after:scale-x-0 after:origin-left
      after:transition-transform after:duration-300
      hover:after:scale-x-100
    `;
    a.classList.add("self-center");
    mobilePanel.appendChild(a);
  });

  // Clone action buttons for mobile
  actions.forEach(action => {
    if (action instanceof HTMLElement) {
      const clone = action.cloneNode(true);
      clone.classList.add("self-center","p-4", "py-2", "w-fit");
      mobilePanel.appendChild(clone);
    }
  });

  /* -----------------------------------------
  * HAMBURGER BUTTON
  * ----------------------------------------- */
  const hamburger = document.createElement("button");
  hamburger.type = "button";
  hamburger.className = `
    md:hidden ml-auto mr-3 p-2 
    rounded text-(--icon-default)
    hover:bg-(--surface-neutral-hover)
    active:bg-(--surface-neutral-active)
    transition-all duration-300
  `;
  hamburger.appendChild(MenuIcon("w-6 h-6"));
  headerRow.appendChild(hamburger);

  /* -----------------------------------------
  * SIMPLE OPEN / CLOSE TOGGLE
  * ----------------------------------------- */
  let isOpen = false;

  // Accessible attributes (initial)
  hamburger.setAttribute("aria-label", "Toggle menu");
  hamburger.setAttribute("aria-expanded", "false");

  hamburger.addEventListener("click", (e) => {
    e.stopPropagation(); 

    isOpen = !isOpen;

    hamburger.innerHTML = "";
    hamburger.appendChild(isOpen ? XMarkIcon("w-6 h-6") : MenuIcon("w-6 h-6"));
    hamburger.setAttribute("aria-expanded", isOpen);

    if (isOpen) {
      mobilePanel.classList.add("py-6", "px-4");
      mobilePanel.classList.add("shadow-(--shadow-md)", "border-t", "border-(--border-default)/40");
      mobilePanel.style.maxHeight = mobilePanel.scrollHeight + "px";
    } else {
      mobilePanel.classList.remove("py-6", "px-4");
      mobilePanel.classList.remove("shadow-(--shadow-md)", "border-t", "border-(--border-default)/40");
      mobilePanel.style.maxHeight = "0px";
    }
  });

  /* Close menu when clicking outside */
  document.addEventListener("click", (e) => {
    if (isOpen && !nav.contains(e.target)) hamburger.click();
  });

  /* Auto-close when switching back to desktop */
  window.addEventListener("resize", () => {
    if (isOpen && window.innerWidth >= 768) hamburger.click();
  });

  // Sticky scroll shadow
  window.addEventListener("scroll", () => {
    if (window.scrollY > 10) header.classList.add("shadow-(--shadow-md)");
    else header.classList.remove("shadow-(--shadow-md)");
  });

  // append nav to header 
  nav.appendChild(headerRow);

  // Append mobilePanel after headerRow
  nav.appendChild(mobilePanel);
  header.appendChild(nav);

  return header;
}

/* -------------------------------------------------------
 * 📌 RENDER HELPER 
 * ------------------------------------------------------*/
export function renderNavbar(target, options) {
  const header = Navbar(options); 

  const mount =
    typeof target === "string" ? document.querySelector(target) : target;

  if (mount) mount.appendChild(header); 

  return header;
}
