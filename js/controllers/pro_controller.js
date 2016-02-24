app.controller('users_controller', function ($scope, users_service ) {
	
	users_service.get().then(function (msg) {
	
         	$scope.msg = msg;
         	
    	});
});
app.controller('tasks_controller', function ($scope, tasks_service) {
	 tasks_service.get().then(function (msg) {
         	$scope.msg = msg;
         	
    	});
});
app.controller('projects_controller', function ($scope, projects_service) {
	projects_service.get().then(function (msg) {
         	$scope.msg = msg;
         	
    	});
});
app.controller('user_projects_controller', function ($scope,  $routeParams, user_projects_service) {
	$scope.user_id=$routeParams.user_id;
	user_projects_service.get($scope.user_id).then(function (msg) {
         	$scope.msg = msg;
         	console.log(msg);     	
    	});
});


