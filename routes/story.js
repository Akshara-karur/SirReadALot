var express = require('express');
var passport = require('passport');



var storyRouter = function(db)    
{

var Story = require('../models/storyModel');
var router = express.Router();
router.post('/',function(req,res){
    var story = new Story(req.body);
    story.save();
    res.send(story);
});

router.get('/',function(req,res){
    
    var query = {}
    if(req.query.duration)
        {
            var count = db.Story.count();
            query.genre = req.query.duration;
            Story.find(query,function(err, stories){
             if(err){
                 console.log(err);
                 res.send(err);
             }
                else
                    res.json(stories);
                
            }).limit(-1).skip(yourRandomNumber).next();
        }
    else
        res.send("Can't leave duration empty!");
    
    
    });
};
module.exports = storyRouter;
