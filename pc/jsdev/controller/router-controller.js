define(function(require, exports, module) {

	"use strict";
	// 模块内部逻辑
	var RouterController = {
		IndexController : function(){
			console.log("HomepageController");
		},
		AnimateController : function(){
			console.log("AnimateController");
		}
	}
	
	return RouterController;
});