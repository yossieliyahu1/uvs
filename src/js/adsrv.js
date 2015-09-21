
'use strict';


var $ = require("jquery");

// var dragDrop = require("./components/dragdrop");

var cnfg = {

    feeds : {
    	"us":  ["become","shopzilla","pricegrabber", "shopping"],
    	"uk":  ["shopzilla", "kelkoo", "pricegrabber", "shopping", "pricegong"],
    	"de": ["become","shopzilla", "kelkoo", "shopping", "pricegong"],
    	"fr": ["become", "shopzilla", "kelkoo", "shopping", "pricegong"],
    	"es" : ["kelkoo", "pricegong"],
    	"it": ["become","kelkoo", "pricegong"],
    	"br" : ["pricegong"],
    }
    
};


var adsrv = {
    
    mHndlr : null,
    mSearched: [],

    gt : function (st, country, hndlr) {
        
        adsrv.mHndlr = hndlr;

        var feeds = cnfg.feeds[country];
        adsrv.gtFeed(feeds.slice(0), st, country);

    },

    gtUrl : function (feed, st, cntry) {
    	var url = "http://offers.goverti.com/offers/" + feed + "/?" +
    	// var url = "http://localhost:3000/offers/" + feed + "/?" +
            "cntry=" + cntry +
            "&prdct=coms010" +
            "&st=" + encodeURIComponent(st) +
            "&ctgry=shopping" + /////////////////////////////////////////
            "&subid=1" +
            "&n=10" +
            "&callback=?";

    	adsrv.mSearched.push(st);
        return url;
    },

    gtFeed: function (feedsArr, st, cntry) {
    	console.log(feedsArr.length);
        var feed = feedsArr.pop();
        if (feed) {
        	var url = adsrv.gtUrl(feed, st, cntry);
        	console.log(url);


        	$.getJSON(url, function (data) {
        		console.log("rendering " + data.length + " offers");
        		adsrv.mHndlr.renderOffers(data);
        		adsrv.gtFeed(feedsArr, st, cntry);
        	});

			/*
        	adsrv.jsonp.gt(url, function (data) {
        		console.log("rendering " + data.length + " offers");
        		adsrv.mHndlr.renderOffers(data);
        		adsrv.gtFeed(feedsArr, st, cntry);
        	});
			*/
        }

        // setTimeout(function () { dragDrop.init(); }, 2000);
    },

    jsonp : {
        clbk: function () { },
        gt: function (url, clbk) {
            window.adsrv.jsonp.clbk = clbk;
            try {
                var s = document.createElement("script");
                s.async = true;
                s.src = url
                document.getElementsByTagName("head")[0].appendChild(s);
            }
			catch (e) { }
        },
        rslt: function (data) {
            window.adsrv.jsonp.clbk(data);
        }
    },

    searched: function () {

    }

};


module.exports = adsrv;