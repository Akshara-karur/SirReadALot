var express = require('express');
var passport = require('passport');
var mongoose = require('mongoose');
//var readTime = require('read-time');

var routes = function(db){

var Story = require('../models/storyModel');

var router = express.Router();
    
    
    router.route('/')
    .post(function(req,res){
    var story = new Story(req.body);
    var content = req.body.content;    
    console.log("story content is "+content); 
    story.save();
    res.send(story);
    
    })

    .get(function(req,res){
    
    
    if(req.query.duration)
        {
            
            var filter = {'duration':req.query.duration};
            
            Story.findOneRandom(filter, function(err, result){
               
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

function timeCalculator(words)
{
    
}

module.exports = routes;
