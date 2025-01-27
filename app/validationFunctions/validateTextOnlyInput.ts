export default function validateTextOnlyInput(input: string): boolean {
  return !input.match(/^\s|\s\s|[^a-zA-Z\s]/);
}
