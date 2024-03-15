const knex = require ("../database/knex")

class UserController {
    async createUser(req,res) {
      const {name,email,telefone,created_at} = req.body
      const user = await knex("users").insert({name,email,telefone,created_at})

     return res.status(200).json("Usuário cadastrado com sucesso")
    }
    async listUser (req,res){
      const user =  await knex("users")
      return res.status(200).json(user)
    }
    async updateUser(req,res){
      const {idUsers} = req.params
      const {name,email,telefone} = req.body
      await knex("users").where({idUsers}).update({name,email,telefone})
      return res.status(200).json("Usuario atualizado")

    }
       async deleteUser(req,res){
      const {idUsers} = req.params
      await knex("users").where({idUsers}).delete()
      return res.status(200).json("Usuário deletado")

    }
    async listUserById(req,res){
      const {idUsers} = req.params
      const user = await knex("users").where({idUsers})
      return res.status(200).json(user)
    }
    

}
module.exports = UserController