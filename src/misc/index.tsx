export function hexToRgb(hex: string) {
  const bigint = parseInt(hex.slice(1), 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;
  return { r, g, b };
}

export function adjustBrightness(
  rgb: { r: number; g: number; b: number },
  percent: number
) {
  const r = Math.min(255, Math.max(0, rgb.r + (255 - rgb.r) * percent));
  const g = Math.min(255, Math.max(0, rgb.g + (255 - rgb.g) * percent));
  const b = Math.min(255, Math.max(0, rgb.b + (255 - rgb.b) * percent));
  return `#${((1 << 24) + (Math.round(r) << 16) + (Math.round(g) << 8) + Math.round(b)).toString(16).slice(1)}`;
}

export function generateNeumorphicCss(color: string, border = true): string {
  const baseColorRgb = hexToRgb(color);
  const darkShadow = adjustBrightness(baseColorRgb, -0.2); // 20% darker
  const lightShadow = adjustBrightness(baseColorRgb, 0.2); // 20% lighter

  return `
    ${border && 'border-radius: 0.7em;'}
    background: ${color};
    box-shadow: 20px 20px 60px ${darkShadow},
                -20px -20px 60px ${lightShadow};
  `;
}
