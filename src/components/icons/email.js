export function EmailIcon() {
  const span = document.createElement("span");
  span.innerHTML = `
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M4.5 4C3.12 4 2 5.12 2 6.5v.7l9.32 5.7c.43.26.93.26 1.36 0L22 7.2v-.7C22 5.12 
               20.88 4 19.5 4H4.5Z"/>
      <path d="M22 8.8l-8.78 5.36c-.73.44-1.71.44-2.44 0L2 8.8V17.5A2.5 2.5 0 0 0 4.5 
               20h15A2.5 2.5 0 0 0 22 17.5V8.8Z"/>
    </svg>
  `;
  return span;
}
