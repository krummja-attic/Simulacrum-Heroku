export function uid(baseId) {
  return `${baseId ? `${baseId}-` : ''}${Math.random().toString(36).substring(2, 9)}`;
}