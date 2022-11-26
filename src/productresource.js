let express = require('express')
const fs = require('fs')
const cors = require('cors')
const expapp = express()

const port = 3000
expapp.listen(port, () => console.log('server started'))

const file = './products.json'
const productsdata = fs.readFileSync(file,(err)=>{
    console.log(err)
})

expapp.use(cors({
    origin:'http://localhost:8080'
}))

let cleaneddata = JSON.parse(productsdata)

console.log(cleaneddata)

function selectpart(data){
   return cleaneddata.filter((dt)=>{
    dt.category == data })
}

expapp.get('/',(req,res)=>{
    try{
        res.status(202).send(cleaneddata)
    }
    catch(err){
        res.send(err)
    }
})

expapp.get('/:category',(req,res)=>{
    try{
        res.status(202).send(selectpart(req.params.category))
    }
    catch(err){
        res.status(404).json(err)
    }
})
