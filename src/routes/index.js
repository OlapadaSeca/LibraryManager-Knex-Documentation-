
const {Router} = require ("express")
const usersRoutes = require("./user.routes")
const bookRoutes = require ("./books.routes")
const loansRoutes = require("./loans.routes")
const routes = Router()

routes.use("/loan", loansRoutes)
routes.use("/",usersRoutes)
routes.use("/", bookRoutes)

module.exports = routes