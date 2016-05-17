/**
 * http://usejsdoc.org/
 */
(function() {

	var app = angular.module("StoryShot", [ 'ngRoute' ]);

	app.config(function($routeProvider) {
		$routeProvider
		.when("/", {
			templateUrl : "pages/home.html",
			controller : "HomeController"
		})
		.otherwise({
			templateUrl: "pages/error.html"
		});
	});

}());