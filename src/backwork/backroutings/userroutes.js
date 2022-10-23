const express = require('express')
const routes = express.Router()
const dbase = require('../datamodel/datamodels')

routes.get('/', async (req,res)=>{
    try{
       const shopper = await dbase.find()
       res.status(202).json(shopper)
    }
    catch (err) {
        res.status(500).json({errormsg: err.message})
    }
})

routes.get('/:id', async (req,res)=>{
    try{
       const shopper = await dbase.findById('id')
       res.status(202).json(shopper)
    }
    catch (err) {
        res.status(500).json({errormsg: err.message})
    }
})

routes.patch('/:id', async (req,res)=>{
    try{
        const updateuser = await dbase.findByIdAndUpdate('id')
        console.log(updateuser)
    }
    catch (err){
        console.log(err)
    }
})

routes.post('/', async (req,res)=>{
    const user = new dbase({
        Username: req.body.Username,
        Password: req.body.Password,
        Passcode: req.body.Passcode,
        CardNumber: req.body.CardNumber,
        CVC: req.body.CVC,
        ExpiryDate: req.body.ExpiryDate,
        HouseNumber: req.body.HouseNumber,
        Street: req.body.Street,
        City: req.body.City,
        State: req.body.State,
        PostalCode: req.body.PostalCode
    })
    try{
        const newshopper = await user.save()
        res.status(202).json(newshopper)
    }
    catch (err){
        res.status(400).json({errormsg: err.message}) 
    }
})


module.exports = routes
