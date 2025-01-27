export default function validateSelectInput(
  input: string,
  options: string[]
): boolean {
  return options.includes(input);
}
