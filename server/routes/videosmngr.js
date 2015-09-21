var youtube = require("../feeds/youtube");
var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
	
	return  youtube.searchByTerm(req.query.term || "madonna").then(function(data){
			
			res.json(data);

	  })
	   .catch(function(e){

	   		res.send(e);

	   });
});

module.exports = router;
