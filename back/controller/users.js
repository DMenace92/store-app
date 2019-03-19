const User = require('../models/users');
module.exprots = {
   
   
    index:(req,res)=>{
    User.find().exec((err,users)=>{
        res.json(users);
    })
},

//login
    login:(req, res) =>{
        user.findOne({email:req.body.email, password: req.body.password})
        .exec(function(err,user){
            console.log(user)
            if(err){
                res.json(err)
            }else if(!user){
                var err = new Error('user not found.');
                err.status = 401;
                res.json(err)
            } else if(user){
                delete user.password;
                const token = jwt.sign({user}, secret,
                )
                res.json({massage: "successfully signed in", token, user})
            }else{
                res.json('success');
            }
        })
    },
    //REGISTERATION
    register:(req,res,next) =>{
        console.log(req.body)
        let userData = {
            name: req.body.name,
            email: req.body.email,
            username: req.body.username,
            password: req.body.password,
        }
        user.create(userData, function(err,user){
            if(err){
                return next(err)
            } else{
                return res.redirect('/')
            }
        })
    }


}