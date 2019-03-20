const users = require('../controller/users')
const jwt = require("jsonwebtoken")
const secret = process.env.JWT_SECRET || "donuts";

module.exports = function(app){
//USERS_______________________________________________________________-
app.get('/users',users.index);
app.post('/login', users.login);
app.post('/register',users.register);

//AUTH_______________________________________________________________
// app.use(jwtAuth)


//USERS after auth_____________________________________________________



}

const jwtAuth = (req,res,next)=>{
    const token = req.body.token || req.headers.token || req.query.token;
    if (token) {
      jwt.verify(token, secret, (err, decoded) => {
        console.log(err);
        if (err) {
          console.log(err)
          return res.sendStatus(401)
        } else {
          delete decoded.password;
          req.decoded = decoded;
          console.log('GOING NEXT', req.url, req.method);
          next();
        }
      })
    } else {
      return res.sendStatus(401)
     
    }
  
}
