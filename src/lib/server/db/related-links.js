export class RelatedLink {
  constructor(db) {
    this.db = db
    this.init()
  }
 
  init() {
    const creationString = `
      CREATE TABLE IF NOT EXISTS related_links(
        parent_link_id INTEGER,
        child_link_id INTEGER,
        FOREIGN KEY (parent_link_id) REFERENCES links(id),
        FOREIGN KEY (child_link_id) REFERENCES links(id)
      )`
    this.db.exec(creationString)
  }

  getRelatedLinks(parent_link_id) {
    const statement = `
SELECT 
  parent_links.slug AS parent_slug,
  related_links.parent_link_id,
  child_links.id,
  child_links.slug,
  child_links.main_component
FROM 
  related_links
JOIN 
  links AS child_links
ON 
  related_links.child_link_id = child_links.id
JOIN
  links AS parent_links
ON
  related_links.parent_link_id = parent_links.id`

  return this.db.prepare(statement).all( {parent_link_id} )
  }

  addRelatedLink(parent_link_id, child_link_id) {
    const statement = `INSERT INTO related_links(parent_link_id, child_link_id) 
    VALUES(@parent_link_id, @child_link_id)`
    this.db.prepare(statement).run( {parent_link_id, child_link_id} )
  }

  removeRelatedLinks(parent_link_id) {
    const statement = `DELETE FROM related_links WHERE parent_link_id = @parent_link_id`
    return this.db.prepare(statement).run( {parent_link_id} )
  }
}