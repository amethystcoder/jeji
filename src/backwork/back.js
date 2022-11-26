const express = require('express')
const mongo = require('mongoose')
const cors = require('cors')

mongo.connect('mongodb://127.0.0.1:27017/shoppers',{useNewUrlParser: true})

let database = mongo.connection

database.on('error',(err) => console.log(err))
database.once('connection', () => console.log('DatAbase started successfully'))

const expressapp = express()
let PORT = 4200

expressapp.use(cors({
    origin:'http://localhost:8080'
}))

expressapp.get('/cart', (req,res)=>{
    
})

expressapp.listen(PORT, () => {
    console.log('server started')
})

expressapp.use(express.json()) 
expressapp.on('error',(err) =>{
    console.log(err)
})

let Userroutes = require('../backwork/backroutings/userroutes')
expressapp.use('/shoppers',Userroutes)