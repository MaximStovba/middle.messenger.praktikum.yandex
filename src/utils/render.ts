export function render(query: string, block: any) {
  const root = document.querySelector(query);
  root && root.appendChild(block.getContent());
  return root;
}
