
'use strict';


var $ = require("jquery");
var React = require("react");

var dragdrop = require("./components/dragdrop");

var TopBar = require("./topbar");
var Search = require("./sbx");
var ContentArea = require("./content");
var LangBar = require("./langbar");
var SavedOffers = require("./savedoffers");
var Footer = require("./footer");
var Offer = require("./offer");

var adsrv = require("./adsrv");

var rpt = {
	snd : function (typ, feed, cmpnnt){

	}
}


var SWU = React.createClass( {

    getInitialState : function () {
    	return {
			country : "us",
        	offersData : [],
			savedOffersData : [],
        	searchTerms : [],
			footerDraw : false
        }
    },

    rpt : function (typ, feed, cmpnnt){
    	rpt.snd(typ, feed, cmpnnt);
    },

    // adsrv.js    
    renderOffers : function (data) {
    	if(!data || !data.length){
    		return;
    	}
    	
    	console.log("re-render offers " + data[0].desc.short + "   " + data);
    	var newData = this.state.offersData;
    	for(var d in data){
    		newData.push(data[d]);
    	}

    	this.setState({ offersData : newData, footerDraw : true });
    },
    
    // sbx.js
    search : function (st) {
    	
    	var strms = this.state.searchTerms;
    	if($.inArray(st, strms) < 0){
    		strms.push(st);
    	}
    	
    	this.refs.cntnt.reset();
    	this.setState({ searchTerms : strms, offersData : [], footerDraw : false });

    	this.refs.sbx.top();

        adsrv.gt(st, this.state.country, this);
    },

    gtOffer : function (id){
    	return this.refs.cntnt.gtOffer(id);
    },

    addOffer : function (id){
    	var state = this.state;
    	state.savedOffersData.push(this.gtOffer(id));
    	this.setState(state);
    },

    setCountry : function (ct){
    	this.setState({country : ct});
    },

    componentDidMount : function(){
    	loadEnv();
    	dragdrop.init(this);
    },

    componentDidUpdate : function(){
    	dragdrop.run();
    },

	// drag
	//<div id="drgbl" ondrop="drop(event)" ondragover="allowDrop(event)"></div> 
	// <div id="myDrpbl" className="dragdroparea"></div>
    render: function () {
    	return <div className="container-fluid">
					<div className="row">
						<div className="col-md-12">
							<TopBar />
						</div>
					</div>
					<div className="row">
						<div className="col-md-2 col-xs-1">
							<div className="info">
								<LangBar hndlr={this} />
								<SavedOffers offers={this.state.savedOffersData} />
								<Search.Searched hndlr={this} terms={this.state.searchTerms} />
							</div>
						</div>
						<div className="col-md-10 col-xs-11">
							<Search.SBX hndlr={this} ref="sbx" />
							<ContentArea ref="cntnt" offers={this.state.offersData} />
						</div>
					</div>			
					<div className="row">
						<div className="col-md-12">
							<Footer draw={this.state.footerDraw} />
						</div>
					</div>	
                </div>
    }
});

//window.onload = function () {
React.render(<SWU />, 
    document.getElementById('main'));
//};



function loadEnv () {

	try{

		$(window).on("load resize", function () {
			$(".fill-screen").css("height", window.innerHeight);
		});

		try{
			// add Bootstrap's scrollspy
			$('body').scrollspy({
				target: '.navbar',
				offset: 160
			});
		}
		catch(e){}

		// smooth scrolling
		$('nav a, .down-button a').bind('click', function () {
			$('html, body').stop().animate({
				scrollTop: $($(this).attr('href')).offset().top - 100
			}, 1500, 'easeInOutExpo');
			event.preventDefault();
		});

		try{
			// initialize WOW for element animation
			new WOW().init();
		}
		catch (e) {
			alert(e);
		}
	
		// parallax scrolling with stellar.js
		//$(window).stellar();

	}
	catch(e){ alert(e);}
};