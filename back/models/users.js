const mongoose = require('mongoose')
mongoose.connect("mongodb://localhost/store",{useNewUrlParser: true})

const userSchema = mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    userName:{
        type:String,
        uniqu:true,
        require: true,
        trim: true

    },
    password:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        trim: true,
        require:true,
        unique:true
    },
    // img:{
    //     type: Image,

    // },
    create_date:{
        type: Date,
        default: Date.now
    }


})
module.exports = mongoose.model('Users',userSchema)

