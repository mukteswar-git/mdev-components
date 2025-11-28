import { renderFooter } from "./footer.js";
import { SocialIcons } from "../icons/social/social.js"

// COMMON FOOTER DATA
const contact = {
  phone: "06782-233362",
  email: "mukteswar.work@gmail.com",
};

const socials = [
  { icon: SocialIcons.facebook, href: "https://www.facebook.com/profile.php?id=61578039423848" },
  { icon: SocialIcons.instagram, href: "https://www.facebook.com/profile.php?id=61578039423848" },
  { icon: SocialIcons.youtube, href: "https://www.facebook.com/profile.php?id=61578039423848" },
  { icon: SocialIcons.linkedin, href: "https://www.facebook.com/profile.php?id=61578039423848" },
  { icon: SocialIcons.x, href: "https://www.facebook.com/profile.php?id=61578039423848" },
  { icon: SocialIcons.github, href: "https://www.facebook.com/profile.php?id=61578039423848" },
];

const links = [
  { label: "Home", href: "#" },
  { label: "About", href: "#" },
  { label: "Services", href: "#" },
  { label: "Testimonial", href: "#" },
  { label: "Contact", href: "#" },
];

renderFooter("#footer-demo", { contact, socials, links });