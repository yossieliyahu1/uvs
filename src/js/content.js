
'use strict';

var $ = require("jquery");
var React = require("react");

var Offer = require("./offer");

var ContentArea = React.createClass({

	offers : [],

	reset : function (){
		this.offers = [];
	},

	gtOffer : function (id){
		return this.offers[id];
	},

	stOffer : function (offer){
		this.offers[offer.id] = offer;
	},

	render: function () {
		
		return <div id="swu-content" className="content-area">
                    {
						this.props.offers.map(function (b) {
							// return <SquareOffer data={b} />
							
							return <Offer.Wide data={b} hndlr={this} />
                        }, this)
                    }
				
            </div>
    }
});

module.exports = ContentArea;