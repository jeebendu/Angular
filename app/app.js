// create the module and name it
	var myApp = angular.module('myApp', ['ngRoute']);

	// routes
	myApp.config(function($routeProvider) {
		$routeProvider

			// route for the home page
			.when('/', {
				templateUrl : 'app/templates/home.html',
				controller  : 'mainController'
			})

			// route for the about page
			.when('/about', {
				templateUrl : 'app/templates/about.html',
				controller  : 'aboutController'
			})

			// route for the service page
			.when('/service', {
				templateUrl : 'app/templates/services.html',
				controller  : 'serviceController'
			})
            // route for the contact us page
			.when('/contact', {
				templateUrl : 'app/templates/contactus.html',
				controller  : 'contactusController'
			});
	
	});

