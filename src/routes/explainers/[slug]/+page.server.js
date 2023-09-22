import { models } from '$lib/server/db/index.js'
const { Link } = models

export async function load({ params }) {
    console.log(params.slug)
    const explainer = await Link.getLinkBySlug(params.slug)
    return {explainer}
}