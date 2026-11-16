/**
 * Determines whether a URL is a placeholder or a live link.
 */
export function isPlaceholderLink(url) {
  if (!url) return true;
  const trimmed = url.trim();
  return (
    trimmed.startsWith('[') ||
    trimmed.includes('PLACEHOLDER') ||
    trimmed === '#' ||
    trimmed.startsWith('https://github.com/[') ||
    trimmed.startsWith('https://linkedin.com/in/[') ||
    trimmed.startsWith('https://twitter.com/[')
  );
}

/**
 * Safe handler for link clicks
 */
export function handleSafeLink(e, url, title, onPlaceholderClick) {
  if (isPlaceholderLink(url)) {
    if (e && e.preventDefault) e.preventDefault();
    if (onPlaceholderClick) {
      onPlaceholderClick(url, title);
    }
    return false;
  }
  return true;
}
