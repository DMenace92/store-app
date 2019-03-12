const User = require('../models/users');
module.exprots = {
   
   
    index:(req,res)=>{
    User.find().exec((err,users)=>{
        res.json(users);
    })
}
//login
//     login:(req, res) =>{
//         user.findOne({email:req.body.email, password: req.body.password})
//         .exec(function(err,user){
//             console.log(user)
//         })
// }

}