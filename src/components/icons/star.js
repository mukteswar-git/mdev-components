export function StarIcon() {
  const span = document.createElement("span");
  span.innerHTML = `
    <svg width="20" height="20" viewBox="0 0 24 24"
      fill="currentColor" stroke="currentColor" stroke-width="1.5"
      stroke-linecap="round" stroke-linejoin="round">
      <path d="M12 2l2.8 6.1 6.7.6-5 4.4 1.5 6.5L12 16.9l-6 2.7 1.5-6.5-5-4.4 6.7-.6L12 2z"/>
    </svg>
  `;
  return span;
}
