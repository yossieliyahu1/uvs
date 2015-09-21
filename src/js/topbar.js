
'use strict';

var $ = require("jquery");
var React = require("react");

var TopBar = React.createClass({
        
    render: function () {
    	return <header id="top">
					<nav className="navbar navbar-inverse navbar-fixed-top cbp-af-header navbar-custom" role="navigation">
						<div className="container-fluid">
						   <div className="navbar-header">
								<a href="#top">
									<img src="./imgs/shopping.png" className='logo' />
								</a>
							</div>
							<div className="collapse navbar-collapse navbar-collapse-custom" id="bs-example-navbar-collapse-1">
								<ul className="nav navbar-nav navbar-right navbar-right-custom">
									<li><a href="#top">Home</a></li>
									<li><a href="#sights">Partners</a></li>
									<li><a href="#activities">Products</a></li>
									<li><a href="#contact-us">Contact Us</a></li>
								</ul>
							</div>
						</div>
					</nav>
			</header>
    }
});
    

module.exports = TopBar;