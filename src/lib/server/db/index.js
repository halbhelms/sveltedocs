import Database from 'better-sqlite3'
import { Link } from '$lib/server/db/link'
import { RelatedLink } from '$lib/server/db/related-links'

const database = new Database('doc_links.db', {verbose: console.log})

export const models = {
  Link: new Link(database),
  RelatedLink: new RelatedLink(database)
}