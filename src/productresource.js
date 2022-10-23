let express = require('express')
const fs = require('fs')
const expapp = express()

const port = 4200
expapp.listen(port, () => console.log('server started'))

const file = './products.json'
const productsdata = fs.readFileSync(file,(err)=>{
    console.log(err)
})

let cleaneddata = JSON.parse(productsdata)

console.log(cleaneddata)

expapp.get('/',(req,res)=>{
    try{
        res.status(202).send(cleaneddata)
    }
    catch(err){
        res.send(err)
    }
})

module.exports = cleaneddata