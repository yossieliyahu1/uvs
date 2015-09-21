

'use strict';

var $ = require("jquery");
var React = require("react");

var SBX = React.createClass( {

	ontop : false,

    handleClick : function () {
        this.props.hndlr.search($("#sbx").val());
    },

    top : function(){
    	if(this.ontop){
    		return;
    	};

    	var sbxwrpr = React.findDOMNode(this.refs.sbxwrpr);
    	$(sbxwrpr).hide(200, function (){
    		$(this).addClass("ontopbar");
    		$(this).show(100);
    	});

    	this.ontop = true;
    },

    render: function () {
    	return <div ref="sbxwrpr" className="search-box-wrpr">
                    <input id="sbx" type="text" className="search-box"  placeholder="Enter your search" /><button type="button" className="btn btn-danger sbtn" onClick={this.handleClick}></button>
               </div>
    }
});

var Searched = React.createClass( {

	propLen : 0,

	handleClick : function (e) {
		var st = e.target.innerText;
		this.props.hndlr.search(st);
	},

	shouldComponentUpdate: function(nextProps, nextState) {
		if(nextProps.terms.length > this.propLen){
			this.propLen = nextProps.terms.length;
			return true;
		}
		return false;
	},

	render: function () {

		if(!this.props.terms || this.props.terms.constructor !== Array || this.props.terms.length == 0){
			return null;
		}

		return <div className="searched">
					<div className="searched-title">Your Searched Items</div>
                    {
                    	this.props.terms.map(function (b) {
                    		return <div className="searched-item" onClick={this.handleClick} >{b}</div>
                    		}, this)
                    }
            </div>
	}
});

module.exports = {
	SBX : SBX,
	Searched : Searched
}