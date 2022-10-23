const datamodel = require('mongoose')

const userschema = new datamodel.Schema({
    Username:{
        type: String,
        required: true
    },
    Password:{
        type: String,
        required: true
    },
    Passcode:{
        type:Number,
        required: true
    },
    CardNumber:{
        type: Number
    },
    ExpiryDate:{
        type: String
    },
    CVC:{
        type: Number
    },
    Lastentry:{
        type:String,
        default: Date.now
    },
    Cart:{
        type: [{
            type:String,
        }]
    },
    Recents:{
        type: [{
            type:String
        }]
    },
    HouseNumber:{
        type: Number,
        required: true
    },
    Street:{
        type: String,
        required: true
    },
    City:{
        type: String,
        required: true
    },
    State:{
        type: String,
        required: true
    },
    PostalCode:{
        type: Number,
        required: true
    }
})

module.exports = datamodel.model('Shopusers',userschema)