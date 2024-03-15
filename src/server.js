const express = require("express")
const routes = require ("./routes")
const swaggerUi = require ("swagger-ui-express")
const swaggerDocument = require ('./swagger.json')
const app = express()
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

const PORT = 3333

app.use(express.json())
app.use(routes)
app.use((err,req,res,next)=>{
    console.error(err.stack)
    res.status("Algo deu errado!")
})
app.listen(PORT, () =>{
    console.log("O servidor está rodando na porta " + PORT)
})

