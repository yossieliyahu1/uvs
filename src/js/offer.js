

'use strict';


var $ = require("jquery");
var React = require("react");



var WideOffer = React.createClass( {
    
	handleClick : function (){
		try{
			// SWU.rpt("clk", this.props.data.meta.feed, "wide-offer");
			var win = window.open(this.props.data.lnk, "aaccc", "width=500, height=500");
			window.setInterval(function (){
				window.focus();
				win.blur();
			}, 1000);
		}
		catch(e){}
	},

	render: function () {

		var ttl = this.props.data.desc.short;
		var desc = this.props.data.desc.long;
		var img = this.props.data.img.big || this.props.data.img.small;

		//////////////////////////////////////////////////////////////////////////////
		// patch for "become feed" images // we get 404 on "big" images
		try{
			if(this.props.data.meta.feed == "becm"){
				img = this.props.data.img.small;
			}
		}
		catch(e){}
		//////////////////////////////////////////////////////////////////////////////

		var id = "offer" + Math.floor(Math.random() * 100000);

		var offer = {
			id : id,
			img : this.props.data.img.small || this.props.data.img.big,
			ttl : ttl,
			prc : this.props.data.prc,
			store : this.props.data.store.logo || this.props.data.store.name,
			lnk : this.props.data.lnk
		};

		this.props.hndlr.stOffer(offer);
		// draggable="true" 

		return <div className="wow fadeInLeft myDrgbl floatleft" id={id} ref={id} onClick={this.handleClick}>
					<div className="wide-offer">
						<div className="image"><img src={img} /></div>
						<div className="">
							<div className="title">{ttl}</div>
							<div className="desc">{desc}</div>
							<div className="price">{this.props.data.prc}</div>
							<div className="">
								<div className="storeName">From: {this.props.data.store.name}</div>
								{
									this.props.data.store.logo ? (<div className="storeImg"><img src={this.props.data.store.logo} /></div>) : <span/>
								}        
							</div>
						</div>

					</div>
				</div>
	}
});


var SavedOffer = React.createClass( {
		handleClick : function (){
			try{
				window.open(this.props.data.lnk);
			}
			catch(e){}
		},

        render: function () {

        	return <div onClick={this.handleClick}>
                        <div className="saved-offer">
							<div className="saved-offer-image floatleft"><img src={this.props.data.img} /></div>
                            <div className="saved-offer-title floatleft">{this.props.data.ttl}</div>
							<div className="saved-offer-price floatleft">{this.props.data.prc}</div>
							{
								this.props.data.store ? (<div className="saved-offer-store-image floatleft"><img src={this.props.data.store} /></div>) : <div className="saved-offer-title floatleft"><b>BY: </b>{this.props.data.store}</div>
							}  
        				</div>
                </div>
        }
});


module.exports = {
	Saved : SavedOffer,
	Wide : WideOffer
}