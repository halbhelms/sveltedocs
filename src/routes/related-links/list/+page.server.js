import { models } from '$lib/server/db/index.js'
const { RelatedLink } = models

export async function load() {
  const relatedLinks = await RelatedLink.getRelatedLinks()
  return {relatedLinks};
};