import { renderNavbar } from "./navbar.js";
import Button from "../button/button.js";

renderNavbar("#navbar-demo", {
  navLinks: [
    { label: "Home", href: "#" },
    { label: "Projects", href: "#" },
    { label: "Components", href: "#" },
    { label: "Contact", href: "#" },
  ],
  actions: [
    Button({
      variant: "ghost",
      children: "Login"
    }),
    Button({
          variant: "primary",
          children: "Sign Up"
        })]
});