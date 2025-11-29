export function WarningIcon(size = "w-5 h-5") {
  const icon = document.createElement("span");
  icon.innerHTML = `
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      class="${size}"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M12 9v3.75M12 17h.01M10.29 3.86
           1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 
           00-3.42 0z"
      />
    </svg>
  `;
  return icon;
}
