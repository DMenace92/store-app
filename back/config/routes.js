const users = require('../controller/users')

module.export = function(app){
//users_______________________________________________________________-
app.get('/users',users.index)

}