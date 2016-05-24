var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var random = require('mongoose-simple-random');


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

storySchema.plugin(random);
module.exports = mongoose.model('Story', storySchema);