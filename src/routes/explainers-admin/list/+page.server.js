import { models } from '$lib/server/db/index.js'
import { redirect } from '@sveltejs/kit'
const { Link } = models

export async function load() {
    const links = Link.getLinks();
    return {links};
};

export const actions = {
  default: async ({ request }) => {
    const data = await request.formData()
    const id = data.get('id')
    Link.deleteLink(id)
    return {
      message: 'Link deleted',
    }
  }
}