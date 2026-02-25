export const DPI_VALUES = [400, 800, 1600, 3200] as const;
export type DpiValue = (typeof DPI_VALUES)[number];

export function generateSensValues(): number[] {
  const values: number[] = [];
  for (let i = 0.40; i <= 2.505; i += 0.05) {
    values.push(Math.round(i * 100) / 100);
  }
  return values;
}

export const SENS_VALUES = generateSensValues();

export function calcCm360(sens: number, dpi: number): number {
  return (2.54 * 360) / (sens * dpi * 0.022);
}

export function calcEdpi(sens: number, dpi: number): number {
  return Math.round(sens * dpi);
}

export function classifyCm360(cm360: number): string {
  if (cm360 < 25) return 'Fast Turn Speed';
  if (cm360 <= 45) return 'Balanced Speed';
  return 'Precision Speed';
}

export function classifyCm360Slug(cm360: number): string {
  if (cm360 < 25) return 'fast';
  if (cm360 <= 45) return 'balanced';
  return 'precision';
}

export function sensToSlug(sens: number): string {
  return sens.toFixed(2).replace('.', '-');
}

export function formatSens(sens: number): string {
  return sens.toFixed(2);
}

export function formatCm360(sens: number, dpi: number): string {
  return calcCm360(sens, dpi).toFixed(1);
}

export function dpiSlug(dpi: number): string {
  return `${dpi}-dpi`;
}

export function getPageUrl(dpi: number, sens: number): string {
  return `/${dpiSlug(dpi)}/${sensToSlug(sens)}-sens/`;
}

export function getHubUrl(dpi: number): string {
  return `/${dpiSlug(dpi)}/`;
}

export function getNearbySens(sens: number): number[] {
  const nearby: number[] = [];
  const lower = Math.round((sens - 0.05) * 100) / 100;
  const upper = Math.round((sens + 0.05) * 100) / 100;
  if (lower >= 0.40) nearby.push(lower);
  if (upper <= 2.50) nearby.push(upper);
  return nearby;
}
