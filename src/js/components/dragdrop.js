

'use strict';

var $ = require("jquery");


var dragDrop = {

	drpbl: null,
	crntDrgblId: null,
	hndlr : null,

	init: function (pHndlr) {

		this.hndlr = pHndlr;
	},

	run: function (pHndlr) {


		var drgbls = document.querySelectorAll('.myDrgbl');

		for (var i = 0 ; i < drgbls.length ; i++) {

			//var id = drgbls[i].getAttribute("id");
			//if (!dragDrop.hndlr.gtOffer(id)) {
				drgbls[i].addEventListener('dragstart', function (event) { dragDrop.dragstart(event) });
				drgbls[i].addEventListener('drag', function (event) { dragDrop.drag(event) });
				drgbls[i].addEventListener('dragend', function (event) { dragDrop.dragend(event) });
			//}
		}

		//if (!dragDrop.drpbl) {
			dragDrop.drpbl = document.getElementById("myDrpbl");
			dragDrop.drpbl.addEventListener('dragover', function (event) { dragDrop.dragover(event) });
			dragDrop.drpbl.addEventListener('dragenter', function (event) { dragDrop.dragenter(event) });
			dragDrop.drpbl.addEventListener('dragleave', function (event) { dragDrop.dragleave(event) });
			dragDrop.drpbl.addEventListener('drop', function (event) { dragDrop.drop(event) });
		//}
	},

	dragstart: function (event) {
		//event.dataTransfer.effectAllowed = 'move';
		dragDrop.crntDrgblId = event.currentTarget.id;
	},

	drag: function (event) {

	},

	dragend: function (event) {
		//dragDrop.crntDrgbl = null;
	},

	dragover: function (event) {
		if (event.preventDefault) {
			event.preventDefault();
		}

		//event.dataTransfer.dropEffect = 'move';
		return false;
	},

	dragenter: function (event) {
		//event.target.className = "over";
	},

	dragleave: function (event) {
		//event.target.className = "";
	},

	drop: function (event) {

		if (event.preventDefault) event.preventDefault();
		if (event.stopPropagation) event.stopPropagation();

		// event.target.className = "";
		// event.target.innerHTML += event.dataTransfer.getData('text');

		if (!dragDrop.crntDrgblId) {
			return;
		}

		console.log(dragDrop.crntDrgblId);
		// $("#" + dragDrop.crntDrgblId).hide();
		
		dragDrop.hndlr.addOffer(dragDrop.crntDrgblId);

		// $("#" + dragDrop.crntDrgblId).hide();

		// $("#" + event.target.id).append(dragDrop.hndlr.gtDropObj(dragDrop.crntDrgblId));

		dragDrop.crntDrgblId = null;
		// Remove the element from the list.
		// document.querySelector('.myDrgbl').removeChild(dragDrop.crntDrgbl);

		return false;
	}
};


module.exports = dragDrop;