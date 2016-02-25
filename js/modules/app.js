var app=angular.module('projectApp', ['ngRoute']);
	app.config(['$routeProvider', function($routeProvider) {
	    $routeProvider.when('/users', {
	    	controller: 'users_controller',
		templateUrl: '../views/users.html'
	    }).when('/tasks', {
		controller: 'tasks_controller',
		templateUrl: '../views/tasks.html'
	    }).when('/projects', {
		controller: 'projects_controller',
		templateUrl: '../views/projects.html'
	    })
	    .when('/user/:user_id/projects', {
		controller: 'user_projects_controller',
		templateUrl: '../views/user_projects.html'
	    }).when('/',{
		controller: 'main_controller',
		templateUrl: '../index.html'
	    })
}]);
