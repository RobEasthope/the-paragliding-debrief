type ResponsiveTypeSpacingProps = {
  css: string;
  value: number;
  max: number;
};

export function responsiveTypeSpacing({
  css,
  value,
  max,
}: ResponsiveTypeSpacingProps): string {
  if (value) {
    return `${css}: ${value && value / max}em;`;
  }

  return '';
}
