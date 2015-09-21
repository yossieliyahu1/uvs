
'use strict';

var $ = require("jquery");
var React = require("react");

var Offer = require("./offer");
   
var SavedOffers = React.createClass({
        
	render: function () {
		return <div className="savedoffers">
					<div id="myDrpbl" className="dragdroparea">
						<div className="dragdroptxt">Drag & Drop your favorites offers</div>
						{
							this.props.offers.map(function (b) {
								return <Offer.Saved data={b} hndlr={this} />
								}, this)
						}
					</div>
				</div>
	}
});
    
module.exports = SavedOffers;