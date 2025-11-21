export function UploadIcon(size = "w-5 h-5") {
  const icon = document.createElement("span");
  icon.innerHTML = `
  <svg xmlns="http://www.w3.org/2000/svg"
       fill="none" viewBox="0 0 24 24"
       stroke-width="1.5" stroke="currentColor"
       class="${size}">
    <path stroke-linecap="round" stroke-linejoin="round"
          d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 
          2.25 0 0021 18.75V16.5m-9-13.5v12m0-12l-3.75
          3.75M12 3l3.75 3.75" />
  </svg>`;
  return icon;
}
