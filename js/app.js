angular
	.module('test', [])
	.controller('Login', function($scope){

		this.user = {};

		this.submit = function(){
			console.log(this.user);
		}.bind(this);

	});