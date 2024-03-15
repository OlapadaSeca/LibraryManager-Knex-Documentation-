const knex = require("../database/knex")
class BooksController{
    async createBook(req, res){
        const {
            author, 
            title,  
            numberOfPages} = req.body
        await knex("books").insert({author,title,numberOfPages})

        return res.status(201).json("Livro criado com sucesso")
    }
async listBooks(req,res){
    const book =  await knex("books")
    return res.status(200).json(book)
}
async listBooksById(req,res){
    const {idBooks} = req.params
    const book = await knex("books").where({idBooks})
    return res.status(200).json(book)
}
async deleteBooks(req,res){
    const{idBooks} = req.params
    await knex("books").where({idBooks}).delete()
    return res.status(200).json("Livro deletado com sucesso")
}
async ArmaBooks (req,res){
    const {idBooks} = req.params
    await knex ("books").where({idBooks}).insert("idArmaBooks")
}
}
module.exports = BooksController

