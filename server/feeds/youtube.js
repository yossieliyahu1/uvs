
var Promise = require("bluebird"),
	needle = Promise.promisifyAll(require("needle")),
	assign = require("object-assign");

var baseURL = "https://www.googleapis.com/youtube/v3";
var apiKey = "AIzaSyBASWlezcCoABNYs2cg14aM0AcRxX8Cs_U";

var searchVideos = {

   	url : baseURL + "/search",
   	options : {

   		order : "rating",
   		type : "video",
   		videoEmbeddable : true,
   		part : "snippet",
   		maxResults : 10,
   		key : apiKey
   	}

};


var buildVideosSummary = function(results){
	 return results[1].items.map(function(item){

	 		return {

	 			id : "https://www.youtube.com/watch?v="+ item.id.videoId,
	 			img : item.snippet.thumbnails["default"].url,
	 			title : item.snippet.title,
	 			description : item.snippet.description

	 		}

	 });


};



module.exports = {


	searchByTerm : function(query){

		var requestParams = assign({},searchVideos.options,{q : query});

		return needle.requestAsync("get",searchVideos.url,requestParams)
			   .then(buildVideosSummary)
			   .error(function(e){return e});

	}


};







