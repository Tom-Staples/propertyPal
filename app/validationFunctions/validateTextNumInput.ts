export default function validatePostcode(input: string): boolean {
  return !input.match(/^\s|\s\s|[^a-zA-Z0-9\s]/);
}
