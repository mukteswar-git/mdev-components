export function InfoIcon(size = "w-5 h-5") {
  const icon = document.createElement("span");
  icon.innerHTML = `
  <svg xmlns="http://www.w3.org/2000/svg" 
       fill="none"
       viewBox="0 0 24 24"
       stroke-width="1.5"
       stroke="currentColor"
       class="${size}">
    <path stroke-linecap="round" stroke-linejoin="round"
      d="M11.25 9h1.5m-1.5 3h1.5v5.25m8.25-6.75a9 
      9 0 11-18 0 9 9 0 0118 0z" />
  </svg>`;
  return icon;
}
