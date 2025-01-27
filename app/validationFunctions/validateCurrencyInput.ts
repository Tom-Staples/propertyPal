export default function validateCurrencyInput(input: string): boolean {
  return !!input.match(/^\d{0,10}\.?\d{0,2}$/);
}
