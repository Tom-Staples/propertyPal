export default function isLinkActive(
  currentPath: string,
  link: string
): boolean {
  return link === '/dashboard'
    ? currentPath === link
    : currentPath.includes(link);
}
