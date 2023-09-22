export class Link {
  constructor(db) {
    this.db = db
    this.init()
  }

  init() {
    const creationString = `
      CREATE TABLE IF NOT EXISTS links(
        id INTEGER PRIMARY KEY,
        slug VARCHAR(150) NOT NULL UNIQUE,
        main_component VARCHAR(100) NOT NULL
      )`
    this.db.exec(creationString)
  }

  getLinkBySlug(slug) {
    const statement = `SELECT main_component FROM links WHERE slug = @slug`
    return this.db.prepare(statement).get( {slug} )
  }

  addLink(slug, main_component) {
    const statement = `INSERT INTO links(slug, main_component) 
    VALUES(@slug, @main_component)`
    this.db.prepare(statement).run( {slug, main_component} )
  }

  getLinks() {
    const statement = `SELECT id, slug, main_component FROM links ORDER BY main_component ASC`
    return this.db.prepare(statement).all()
  }

  deleteLink(id) {  
    const statement = `DELETE FROM links WHERE id = @id`
    this.db.prepare(statement).run( {id} )
  }
}