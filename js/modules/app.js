var app=angular.module('projectApp', ['ngRoute','ngLodash']);
	app.config(['$routeProvider', function($routeProvider) {
	    $routeProvider.when('/users', {
	    	controller: 'userController',
		templateUrl: '../views/users.html'
	    }).when('/tasks', {
		controller: 'taskController',
		templateUrl: '../views/tasks.html'
	    }).when('/projects', {
		controller: 'projectController',
		templateUrl: '../views/projects.html'
	    })
	    .when('/user/:user_id/projects', {
		controller: 'userProjectController',
		templateUrl: '../views/user_projects.html'
	    }).when('/',{
		controller: 'mainController'
		
	    })
}]);
