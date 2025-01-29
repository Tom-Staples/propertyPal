export default function getCurrencyDisplayValue(value: string): string {
  if (value === '') {
    return value;
  }
  const decimalIdx: number = value.indexOf('.');
  const decimalString: string =
    decimalIdx !== -1 ? value.substring(decimalIdx) : '';
  const mainString: string =
    decimalIdx !== -1 ? value.substring(0, decimalIdx) : value;

  return `${Number(mainString).toLocaleString()}${decimalString}`;
}
