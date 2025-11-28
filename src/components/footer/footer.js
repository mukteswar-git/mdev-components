import { cva } from "class-variance-authority";
import cn from "../../utils/cn.js";
import { PhoneIcon, EmailIcon } from "../icons/index.js";

/* -------------------------------------------------------
 * 🎨 FOOTER VARIANTS (CVA)
 * ------------------------------------------------------*/
export const footerVariants = cva(`
  w-full
  pt-8 pb-2
  bg-(--gray-darker)
  text-(--gray-lightest)
`);

/* -------------------------------------------------------
 * 🏗️ CREATE FOOTER COMPONENT
 * ------------------------------------------------------*/
export default function Footer({
  brand = "MDev",
  className = "",
  contact = {},
  socials = [],
  links = [],
  year = "2025"
} = {}) {
  const footer = document.createElement("footer");
  footer.className = cn(footerVariants(), className);

  // Base layout (without icons)
  footer.innerHTML = `
    <div class="container px-4 md:px-10 mx-auto">
      <div class="flex flex-col items-center">
        <div class="space-y-4 max-w-[800px]">
          <h1 class="text-(--gray-lightest)">${brand}</h1>

          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 md:gap-x-16 lg:gap-x-20 gap-y-4">
            <div class="space-y-1">
              <!-- Contact -->
              <h6 class="text-(--gray-lightest)">Contact</h6>
              <p class="flex items-center gap-2 text-(--gray-lightest) phone-row"></p>
              <p class="flex gap-2 text-(--gray-lightest) email-row"></p>
            </div>

            <div>
              <!-- Socials -->
              <h6 class="text-(--gray-lightest)">Follow</h6>
              <div class="flex flex-wrap gap-3 text-lg">
                ${socials
                    .map((s) => `<a href="${s.href}" target="_blank" rel="noopener noreferrer">${s.icon}</a>`)
                    .join("")}
              </div>
            </div>

            <!-- Quick Links -->
            <div>
              <h6>Quick Links</h6>
              <ul class="space-y-1 pl-4">
                ${links.map((l) => `<li><a href="${l.href}">${l.label}</a></li>`).join("")}
              </ul>
            </div>
          </div>
        </div>

        <!-- Bottom Row -->
        <div class="w-full mt-8 pt-4 border-t border-(--border-inverse)">
          <div class="flex flex-col md:flex-row items-center justify-between">
            <p class="body-sm text-center md:text-left">&copy; ${year} ${brand}</p>

            <div class="flex gap-4 flex-wrap md:justify-end">
              <a href="#" class="body-sm hover:underline">Privacy Policy</a>
              <a href="#" class="body-sm hover:underline">Terms & Conditions</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;

  /* -----------------------------------------
  * Append SVG icons properly (DOM nodes)
  * ----------------------------------------- */

  const phoneRow = footer.querySelector(".phone-row");
  const phoneIcon = PhoneIcon();
  phoneIcon.classList.add("text-(--gray-lightest)");
  phoneRow.appendChild(phoneIcon);
  phoneRow.append(contact.phone || "");

  const emailRow = footer.querySelector(".email-row");
  emailRow.classList.add("items-start"); // Align icon & text top

  const emailIcon = EmailIcon();
  emailIcon.classList.add("text-(--gray-lightest)");
  emailRow.appendChild(emailIcon);

  // WRAPPING FIX FOR TAILWIND v4+
  const emailText = document.createElement("span");
  emailText.classList.add("wrap-anywhere");  // <-- THIS IS THE KEY
  emailText.textContent = contact.email || "";
  emailRow.appendChild(emailText);


  return footer;
}

/* -------------------------------------------------------
 * 🚀 RENDER FOOTER
 * ------------------------------------------------------*/
export function renderFooter(target, options) {
  const foot = Footer(options);
  const mount =
    typeof target === "string" ? document.querySelector(target) : target;

  if (mount) mount.appendChild(foot);
  return foot;
}
