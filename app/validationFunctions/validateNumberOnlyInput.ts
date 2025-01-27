export default function validateNumberOnlyInput(input: string): boolean {
  return !input.match(/[^0-9]/);
}
