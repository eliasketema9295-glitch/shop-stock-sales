export function isLowStock(
  quantity: number,
  reorderLevel = 5,
): boolean {
  return quantity <= reorderLevel;
}