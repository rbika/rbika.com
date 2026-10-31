# Tag catalog and filtered Blog URLs

Posts already occupy `/blog/[id]`, and the site is static, so a Tag filter cannot live at `/blog/[slug]` or `/blog?tag=`. Tags are a catalog of `{ label, slug }` (slug is identity; unknown slugs fail the build) and the constrained Blog is `/blog/tags/[slug]`.

**Considered Options**:
- Free-form Tag strings in frontmatter: rejected because display names and URLs collide (`HTTP` vs `http`) and renaming a label would break identity.
- Query-param filter on `/blog`: rejected because a static build cannot produce one HTML page per Tag.
- `/blog/[slug]` for Tags: rejected; that route is Posts.
