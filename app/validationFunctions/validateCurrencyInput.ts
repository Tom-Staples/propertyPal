export default function validateCurrencyInput(
  input: string,
  maxLength: number = 12
): boolean {
  return !!input.match(/^\d*\.?\d{0,2}$/) && input.length <= maxLength;
}
