export default function validateTextNumInput(
  input: string,
  maxLength: number = 60
): boolean {
  return !input.match(/^\s|\s\s|[^a-zA-Z0-9\s]/) && input.length <= maxLength;
}
