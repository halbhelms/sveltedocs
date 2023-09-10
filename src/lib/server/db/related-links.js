export class RelatedLink {
  constructor(db) {
    this.db = db
    this.init()
  }

  init() {
    const creationString = `
      CREATE TABLE IF NOT EXISTS related_links(
        parent_link_id INTEGER,
        child_link_id INTEGER
        FOREIGN KEY (parent_link_id) REFERENCES links(id),
        FOREIGN KEY (child_link_id) REFERENCES links(id),
        PRIMARY KEY (parent_link_id, child_link_id)
      )`
    this.db.exec(creationString)
  }

  getRelatedLinks(parent_link_id) {
    const statement = `SELECT child_link FROM related_links WHERE parent_link_id = @parent_link_id`
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