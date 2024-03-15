const {Router} = require ("express")
const UserController = require("../controller/UserController")
const CheckUserExist = require("../middlewares/CheckUserExist")
const usersRoutes =  Router()

const userController = new UserController

usersRoutes.post("/user", userController.createUser)
usersRoutes.get("/user", userController.listUser)
usersRoutes.put("/user/:idUsers",CheckUserExist,userController.updateUser)
usersRoutes.delete("/user/:idUsers",CheckUserExist,userController.deleteUser)
usersRoutes.get("/user/:idUsers",CheckUserExist,userController.listUserById)




module.exports = usersRoutes