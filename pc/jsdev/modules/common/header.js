define(function(require, exports, module){
	
	"use strict";
	
	var $ = require("jquery"),
		view = $("header"),
		tabView = view.find("section");
	
	
	var Header = {
		clickEvent : function(e){
			var $this = $(e.target);
			location.hash = $this.attr("href");
		},
		init : function(){
			for(var i = 0; i < tabView.length; i++){
				$(tabView[i]).on("click", this.clickEvent);
			}
			return this;
		}
	}
	
	return Header.init();
});