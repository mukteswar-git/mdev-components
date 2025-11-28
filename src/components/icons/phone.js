export function PhoneIcon() {
  const span = document.createElement("span");
  span.innerHTML = `
    <svg 
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 24 24"
      width="20" height="20"
    >
      <path d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59c.72.34 1.56.22 
        2.12-.34l1.27-1.27a1 1 0 0 1 1.32-.08c1 .78 2.1 1.42 
        3.32 1.9a1 1 0 0 1 .64.93v2a1 1 0 0 1-1.05 1C12.4 
        21.5 2.5 11.6 2.5 2.5A1 1 0 0 1 3.47 1.5h2a1 1 0 
        0 1 .94.64c.48 1.22 1.12 2.32 1.9 3.32a1 1 0 0 
        1-.08 1.32l-1.27 1.27c-.56.56-.68 1.4-.34 2.12z"/>
    </svg>
  `;
  return span;
}
