 exports.up = (knex) => {
    return knex.schema.createTable("storegedBooks", (table)=>{
        table.increments("idArmaBooks").primary();
        table.integer("id_book").unsigned().index().references("idBooks").inTable("books")
        table.integer("id_users").unsigned().index().references("idUsers").inTable("users")


})
}


exports.down = (knex) => {
    return knex.schema.dropTableIfExist("storegedBooks")

};
 