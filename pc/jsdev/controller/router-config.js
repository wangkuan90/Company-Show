define(function(require, exports, module) {

	"use strict";
	
	var RouterConfig = {
		"#" : {
			url : "",
			container : "#body",
			templateUrl: function(params) {
				return "/html/modules/main.html";
			},
			controller: "IndexController"
		},
		"index" : {
			url : "",
			container : "#body",
			templateUrl: function(params) {
				return "/html/modules/main.html";
			},
			controller: "IndexController"
		},
		"module1" : {
			url : "",
			container : "#body",
			templateUrl: function(params) {
				params.step = params.step || "module1";
				if(params.step === "module1"){
					return "/html/modules/module1.html";
				}
				return "/html/index.html";
			},
			controller: "Module1Controller"
		},
		"other" : {
			url : "",
			container : "#body",
			templateUrl: function(params) {
				params.step = params.step || "1";
				return "/html/modules/other/" + params.step + ".html";
			},
			controller: "Module1Controller"
		}
	}
	
	return RouterConfig;

});