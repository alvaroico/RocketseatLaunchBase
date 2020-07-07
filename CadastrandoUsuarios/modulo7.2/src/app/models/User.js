const db = require('../../config/db') 

module.exports = {
    findOne(filters){
        let query = "SELECT * FROM users"

        Object.keys(filters).map(key => {
            // WHERE | OR | aND
            query `${query}
            ${key}
            `


            Object.keys(filters[key]).map(ffield => {
                query = `${query} ${field} = '${filters[key][field]}'`
            })
        })

        const results = await db.query(query)
        return results.rows[0]
    }
}