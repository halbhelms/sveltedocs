import { models } from '$lib/server/db/index.js'
const { Link } = models

export const actions = {
  default: async ({ request }) => {
    const data = await request.formData()
    const slug = data.get('slug')
    const main_component = data.get('main_component')
    
    const message = `Link ${main_component} created`
    try {
        Link.addLink(slug, main_component)
    } catch (error) {
        message = error.message
    }
    return {message}
  }
}
