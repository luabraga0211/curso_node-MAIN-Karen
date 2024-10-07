const express = require("express")
const exphbs = require("express-handlebars")

const app = express()

app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

app.get('/', (req, res) => {

    const user = {
        name:'luã',
        age:'17',
        email:'exemplo@gmail.com'
    }

    res.render('home', {user: user}) /// envia os dados para o armazenamento da nuvem
})


app.listen(3000)