export function DownloadIcon(size = "w-5 h-5") {
  const icon = document.createElement("span");
  icon.innerHTML = `
  <svg xmlns="http://www.w3.org/2000/svg"
       fill="none" viewBox="0 0 24 24"
       stroke-width="1.5" stroke="currentColor"
       class="${size}">
    <path stroke-linecap="round" stroke-linejoin="round"
          d="M12 3v12m0 0l3.75-3.75M12 15l-3.75-3.75M3 
          18.75h18" />
  </svg>`;
  return icon;
}
