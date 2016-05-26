var express = require('express');
var router = express.Router();
var sess;

router.get('/', function(req, res) {
    sess = req.session;
    sess.user = req.user;
    console.log(req.user);
    res.redirect('http://storyshot.tk/#/read');
});

router.get('/logged',function(req,res){
   res.send(sess.user); 
});

module.exports = router;