const knex = require("../database/knex");

async function CheckUserExist(req,res,next){
    const{idUsers} = req.params
    const user = await knex("users").where({idUsers})

    if(user.length === 0){
        return res.status (400).json ("Usuário não encontrado")

    }
    
    next()
    
}
module.exports = CheckUserExist
