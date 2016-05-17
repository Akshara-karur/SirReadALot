var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
   
    displayName:{
        type: String
    },
    email:{
        type: String    
    },
    image:{
      type: String  
    },
    google:{
        type: Object
    }
});

module.exports = mongoose.model('User', userSchema);