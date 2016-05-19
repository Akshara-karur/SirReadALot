var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var storySchema = new Schema({
   
    title:{
        type: String
    },
    content:{
        type: String    
    },
    duration:{
      type: String  
    },
    credits:{
        type: String    
    }
});

module.exports = mongoose.model('Story', storySchema);