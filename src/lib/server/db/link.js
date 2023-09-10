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

  getLink(slug) {
    const statement = `SELECT main_component FROM links WHERE slug = @slug`
    return this.db.prepare(statement).get( {slug} )
  }

  addLink(slug, main_component) {
    const statement = `INSERT INTO links(slug, main_component) 
    VALUES(@slug, @main_component)`
    this.db.prepare(statement).run( {slug, main_component} )
  }
}