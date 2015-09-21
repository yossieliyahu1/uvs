
'use strict';

var $ = require("jquery");
var React = require("react");
    
var Footer = React.createClass({
        
    render: function () {
    	if(!this.props.draw){
    		return null;
    	}

    	return <footer className="footer">
                   <h1>FOOTER</h1>
               </footer>;
        }
});
    
// React.renderComponent(<Footer />, document.getElementById('main'));


module.exports = Footer;