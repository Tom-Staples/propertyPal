export default function validateTextOnlyInput(
  input: string,
  maxLength: number = 60
): boolean {
  return !input.match(/^\s|\s\s|[^a-zA-Z\s]/) && input.length <= maxLength;
}
