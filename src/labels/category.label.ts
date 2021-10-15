const labels: Record<string, string> = {
  articles: 'Article',
};

export function getCategoryLabel(
  slug: string,
  defaultValue: string = ''
): string {
  return labels[slug] || defaultValue;
}
