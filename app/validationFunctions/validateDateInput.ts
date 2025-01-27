export default function validateDateInput(input: string): boolean {
  return input === '' || !!input.match(/^\d{4}-\d{2}-\d{2}$/);
}
