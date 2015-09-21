
'use strict';

var $ = require("jquery");
var React = require("react");
    
var LangBar = React.createClass({
    
	handleClick : function(event){
		debugger;
		var id = event.target.id;
		this.props.hndlr.setCountry(id.replace("lng_", ""));
	},

	render: function () { // http://localhost:30664/swu/src/imgs/flgs/uk.png

		return <div className="langbar">
				<div>
					<div id="lng_us" className="langitem" ><img src="./imgs/flgs/us.png" onclick={this.handleClick} /></div>
					<div id="lng_uk" className="langitem" ><img src="./imgs/flgs/uk.png" onclick={this.handleClick} /></div>
					<div id="lng_de" className="langitem" ><img src="./imgs/flgs/de.png" onclick={this.handleClick} /></div>
					<div id="lng_fr" className="langitem" ><img src="./imgs/flgs/fr.png" onclick={this.handleClick} /></div>
					<div id="lng_es" className="langitem" ><img src="./imgs/flgs/es.png" onclick={this.handleClick} /></div>
					<div id="lng_it" className="langitem" ><img src="./imgs/flgs/it.png" onclick={this.handleClick} /></div>
					<div id="lng_br" className="langitem" ><img src="./imgs/flgs/br.png" onclick={this.handleClick} /></div>
			   </div></div>
	}
});
    
// React.renderComponent(<Footer />, document.getElementById('main'));


module.exports = LangBar;