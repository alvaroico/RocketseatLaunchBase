const db = require('../../config/db')

function find(filters, table){
  
  let query = `SELECT * FROM ${table}`

  if(filters){
    Object.keys(filters).map(key => {

      // WHERE | OR | AND
      query += ` ${key}`
      Object.keys(filters[key]).map(field => {

          query += ` ${field} = '${filters[key][field]}'`
      })
    })
  }

  return results = await db.query(query)
  
}

const Base = {
  init({ table }) {
    if(!table) throw new Error ('Parâmetro Invalido')

    this.table = table

    return this
  },
  async find(id){
    const results = await find({where: { id } }, this.table)

    return results.rows[0]
  },
  async findOne(filters){
    const results = await find(filters, this.table)

    return results.rows[0]
  },
  async findAll(filters){
    const results = await find(filters, this.table)

    return results.rows
  },
  async create(field){ //User.create({ name: 'Alvaro'})
  try{
      let keys = [],
      values = []

    Object.keys(field).map(key => {
      keys.push(key)
      values.push(fields[key])
    })
    
    const query = `INSERT INTRO ${this.table} (${keys.join(',')})
      VALUES (${values.join(',')})
      RETURNING id
    `

    const results = await db.query(query)
    return results.rows[0].id

  } catch(error){
    console.error(error)
    }
  },
  update(id, fields){
    try {
      let update = []

      Object.keys(fields).map(key => {

        // category_id=($1)
        const line = `${key} = '${fields[key]}'`
        update.push(line)
      })
  
      let query = `UPDATE ${this.table} SET
      ${update.join(',')} where id = ${id}
      `
      return db.query(query)
      
      
    } catch (error) {
      console.error(error)
    }
    
  },
  delete(id){
    return db.query(`DELETE FROM ${this.table} WHERE id = $1`, [id])
  }
}

module.exports = Base