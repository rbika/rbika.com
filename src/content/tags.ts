export type Tag = {
  label: string;
  slug: string;
};

export const tags: Tag[] = [
  { label: 'Frontend', slug: 'frontend' },
  { label: 'HTTP', slug: 'http' },
  { label: 'macOS', slug: 'macos' },
  { label: 'Productivity', slug: 'productivity' },
  { label: 'React', slug: 'react' },
  { label: 'SSE', slug: 'sse' },
  { label: 'Server-Sent Events', slug: 'server-sent-events' },
  { label: 'Typescript', slug: 'typescript' },
  { label: 'Utilities', slug: 'utilities' },
  { label: 'Web Development', slug: 'web-development' },
];

function assertUniqueTags(catalog: Tag[]) {
  const slugs = new Set<string>();
  const labels = new Set<string>();

  for (const tag of catalog) {
    if (slugs.has(tag.slug)) {
      throw new Error(`Duplicate Tag slug: ${tag.slug}`);
    }
    if (labels.has(tag.label)) {
      throw new Error(`Duplicate Tag label: ${tag.label}`);
    }
    slugs.add(tag.slug);
    labels.add(tag.label);
  }
}

assertUniqueTags(tags);

const [firstSlug, ...restSlugs] = tags.map((tag) => tag.slug);

if (!firstSlug) {
  throw new Error('Tag catalog is empty');
}

export const tagSlugs = [firstSlug, ...restSlugs] as const;

export function getTag(slug: string): Tag {
  const tag = tags.find((candidate) => candidate.slug === slug);

  if (!tag) {
    throw new Error(`Unknown Tag slug: ${slug}`);
  }

  return tag;
}

export function tagHref(slug: string) {
  return `/blog/tags/${slug}`;
}

export function tagsInUse(postTagSlugs: readonly string[]): Tag[] {
  const used = new Set(postTagSlugs);

  return tags
    .filter((tag) => used.has(tag.slug))
    .sort((a, b) =>
      a.label.localeCompare(b.label, undefined, { sensitivity: 'base' }),
    );
}
