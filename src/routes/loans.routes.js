const {Router} = require("express")
const LoansController = require("../controller/LoansController")

const loanRoutes = Router()
const loanController = new LoansController()

loanRoutes.post("/:id_users/:id_book", loanController.borrowBooks)
loanRoutes.get("/:id_users", loanController.listBorrowedBook)
loanRoutes.get("/total/:id_users", loanController.totalBorrowedBooks)
loanRoutes.put("/devo/:id_users/:id_book", loanController.returnBorrowedBooks)

module.exports = loanRoutes