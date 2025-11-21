export function SearchIcon(size = "w-5 h-5") {
  const icon = document.createElement("span");
  icon.innerHTML = `
  <svg xmlns="http://www.w3.org/2000/svg" 
       fill="none" viewBox="0 0 24 24"
       stroke-width="1.5"
       stroke="currentColor"
       class="${size}">
    <path stroke-linecap="round" stroke-linejoin="round"
          d="M21 21l-4.35-4.35M15 10.5a4.5 4.5 0 11-9 0
          4.5 4.5 0 019 0z" />
  </svg>`;
  return icon;
}
