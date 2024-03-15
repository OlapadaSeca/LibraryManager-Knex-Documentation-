const {Router} = require ("express")
const UserController = require("../controller/BooksController")
const usersRoutes = require("./user.routes")
const CheckBookExist = require("../middlewares/CheckBookExist")
const bookRoutes =  Router()

const booksController = new UserController

bookRoutes.post("/books", booksController.createBook)
bookRoutes.get("/books", booksController.listBooks)
bookRoutes.get("/books/:idBooks", CheckBookExist,booksController.listBooksById)
bookRoutes.delete("/books/:idBooks",CheckBookExist,booksController.deleteBooks)


module.exports = bookRoutes