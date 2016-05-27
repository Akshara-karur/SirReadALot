var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
     if(!req.user){
        res.redirect('http://storyshot.tk/');
    }
    next();
});

router.get('/',function(req,res){
    res.redirect('http://storyshot.tk/#/read');
});

router.get('/logged', function(req, res){
   if(req.session.passport.user)
       res.send(req.session.passport.user);
    else
        res.send(null);
});

module.exports = router;