define(function(require, exports, module) {
	
	"use strict";

	require("-");
	// 启动路由器，通过监听hash来改变页面内容
	var Router = require("router");
	
	var RouterConfig = require("router-config");
	
	var RouterController = require("router-controller");
	
	H5.Router = new Router().config(RouterConfig).controller(RouterController).start();
	
	// 公共头部和尾部 
	var header = require("./modules/common/header")
	
	
}); 