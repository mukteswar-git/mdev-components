import './main.css';
import "./demos.js";

document.documentElement.setAttribute("data-theme", "dark"); // or 'light'

// -------------------------------
// 🌙 Theme Toggle Logic
// -------------------------------

// 1️⃣ Read user theme from localStorage OR system preference
const savedTheme = localStorage.getItem("theme");
const systemPreference = window.matchMedia("(prefers-color-scheme: dark)").matches;
const defaultTheme = savedTheme || (systemPreference ? "dark" : "light");

// Apply the theme on page load
document.documentElement.setAttribute("data-theme", defaultTheme);

// 2️⃣ Theme toggle function
function toggleTheme() {
  const currentTheme = document.documentElement.getAttribute("data-theme");
  const nextTheme = currentTheme === "dark" ? "light" : "dark";

  // update DOM
  document.documentElement.setAttribute("data-theme", nextTheme);

  // save to localStorage
  localStorage.setItem("theme", nextTheme);
}

// 3️⃣ Attach event listener to button
document.getElementById("theme-toggle").addEventListener("click", toggleTheme);
