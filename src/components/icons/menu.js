export function MenuIcon(size = "w-5 h-5") {
  const icon = document.createElement("span");
  icon.innerHTML = `
  <svg xmlns="http://www.w3.org/2000/svg"
       fill="none"
       viewBox="0 0 24 24"
       stroke-width="1.5"
       stroke="currentColor"
       class="${size}">
    <path stroke-linecap="round" stroke-linejoin="round"
      d="M3.75 6h16.5M3.75 12h16.5m-16.5 6h16.5" />
  </svg>`;
  return icon;
}
