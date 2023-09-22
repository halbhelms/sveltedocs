import { models } from '$lib/server/db/index.js'
const { RelatedLink } = models

export const actions = {
  default: async ({ request }) => {
    const data = await request.formData();
    const parent_link_id = data.get('parent_link_id');
    const child_link_id = data.get('child_link_id');
    RelatedLink.addRelatedLink(parent_link_id, child_link_id)
    return {
      message: 'Related link added'
    };
  }
}

export async function load() {
    return {};
};