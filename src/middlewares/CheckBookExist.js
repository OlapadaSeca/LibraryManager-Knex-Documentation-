const knex = require("../database/knex");

async function CheckBookExist(req,res,next){
    const{idBooks} = req.params
    const book = await knex("books").where({idBooks})

    if(book.length === 0){
        return res.status (400).json ("Livro não encontrado")

    }
    
    next()
    
}
module.exports = CheckBookExist
