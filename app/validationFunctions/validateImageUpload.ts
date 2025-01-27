export default function validateImageUpload(input: string): boolean {
  return (
    input === '' ||
    !!input.toLocaleLowerCase().match(/[\.jpg\.jpeg\.png\.webp]/)
  );
}
