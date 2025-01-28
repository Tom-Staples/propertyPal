export default function validateNumberOnlyInput(
  input: string,
  maxLength: number = 12
): boolean {
  return !input.match(/[^0-9]/) && input.length <= maxLength;
}
