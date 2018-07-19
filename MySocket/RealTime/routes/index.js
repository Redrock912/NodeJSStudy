// module
var express =require('express');


var router = express.Router();

router.get('/', function(req,res){
    res.send({res : "Server Working!"}).status(200);
})

module.exports.router = router;