const knex = require("../database/knex")

class LoansController{


    async borrowBooks(req, res){
        const {id_users, id_book} = req.params

        const book = await knex("books").where({idBooks: id_book}).first()
        const user = await knex("users").where({idUsers: id_users}).first()

        if(!book){
            return res.status(400).json("Livro não encontrado!")
        }

        if(!user){
            return res.status(400).json("Usuário não encontrado!")
        }

        await knex("storegedbooks").insert({id_users, id_book})
        await knex("books").where({idBooks: id_book}).update({isAvaible: false})

        return res.status(200).json("Empréstimo realizado com sucesso!")
    }

    async listBorrowedBook(req, res) {
        const {id_users} = req.params

        const loans = await knex("storegedbooks")
        .where({id_users})
        .innerJoin("books", "books.idBooks", "storegedbooks.id_book")
        .select("books.author", "books.title", "books.numberOfPages") 

        return res.status(200).json(loans)
    }

    async totalBorrowedBooks(req, res) {
       const {id_users} = req.params

       const [total] = await knex("storegedbooks").where({id_users}).count({books: "id_book"})
       
       return res.status(200).json(total)
    }


    async returnBorrowedBooks(req,res){
        const {id_users, id_book} = req.params

        const book = await knex("books").where({idBooks: id_book}).first()
        const user = await knex("users").where({idUsers: id_users}).first()

        if(!book){
            return res.status(400).json("Livro não encontrado!")
        }

        if(!user){
            return res.status(400).json("Usuário não encontrado!")
        }

        const [loan] = await knex("storegedbooks").where({id_users})
        const bookId = loan.id_book

        if(bookId == id_book){
            await knex("books").where({idBooks: id_book}).update({isAvaible: true})
            return res.status(200).json("Livro devolvido com sucesso!")
        }

        return res.status(200).json("Operação não realizada!")
    }

}

module.exports = LoansController