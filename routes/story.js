var express = require('express');

var routes = function(db){

var Story = require('../models/storyModel');

var router = express.Router();
    
    
    router.route('/')
    .post(function(req,res)
    {
    var story = new Story(req.body);
    var content = req.body.content;    
    var duration = timeCalculator(content.split('').length); //calculate the number of words in the story content, and call timeCalculator()
    console.log("duration calculated is "+duration);
    story.duration = duration;    
    story.save();
    res.send(story);
    
    })

    .get(function(req,res){
    
    
    if(req.query.duration) //check if the duration field was left empty
        {
            
            var filter = {'duration':req.query.duration}; //using mongoose-simple-random plugin here, applying filters while fetching a random document
            
            Story.findOneRandom(filter, function(err, result){ //findOneRandom() provided by the plugin
               
                if(!err)
                    {
                        console.log(result);
                        res.send(result);
                    }
                
            });
         }
    else
        res.send("Can't leave duration empty!");
    
    
    });

 return router;    
    
};

function timeCalculator(words)  //Calculate the story reading time based on a simple logic
{
    var readingTime = Math.ceil(words/180);
    console.log("ceil duration is "+readingTime);
    if(readingTime<=1)
        return 1;
    else if(readingTime<=3)
        return 3;
    else if(readingTime<=5)
        return 5;
    else
        return 7;
}

module.exports = routes;
