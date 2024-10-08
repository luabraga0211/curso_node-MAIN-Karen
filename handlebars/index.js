const express = require("express")
const exphbs = require("express-handlebars")

const app = express()

app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

app.get('/page', (req, res) =>{
    res.render('page')
})

app.get('/', (req, res) => {

    const user = {
        name:'luã',
        age:'17',
        email:'exemplo@gmail.com'
    }

    const auth = true

    const approved = true

    res.render('home', { user: user, auth, approved }) /// envia os dados para o armazenamento da nuvem
})


app.listen(3000)