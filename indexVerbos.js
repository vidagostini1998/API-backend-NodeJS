const express = require('express')

const app = express()

app.listen('3000')

/*GET
app.route('/').get((req,res) => res.send("teste"))
*/

/*POST
//middleware
app.use(express.json())

app.route('/').post((req,res) => res.send(req.body))
*/

/* PUT

app.use(express.json())

let author = "Vinicius"

app.route('/').put((req,res) =>{
    author = req.body.author
    res.send(author)
} )
*/

/* DELETE
let author = "Vinicius"

app.route('/:identificador').delete((req,res) => {
    author = ""
    res.send(req.params.identificador)
})
*/

