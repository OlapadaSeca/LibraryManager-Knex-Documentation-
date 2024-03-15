const knex = require("../database/knex");

async function CheckBookIsFalseOrTrue(){
 const {idBooks} = req.params
 const {isAvaible} = req.params
 const bookFalseOrTrue = await knex("books").where({idBooks , isAvaible})
if(bookFalseOrTrue === false){
    return res.status(200).json("Livro não está disponível")
}
next()
}
module.exports = CheckBookIsFalseOrTrue
