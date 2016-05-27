var express = require('express');
var router = express.Router();


router.get('/', function(req, res) {
     
    if(!req.user){
        res.redirect('http://storyshot.tk/');
    }
    else
        res.redirect('http://storyshot.tk/#/read');
    
});

router.get('/logged', function(req, res){

       res.send(req.session.passport.user);
    
});

module.exports = router;