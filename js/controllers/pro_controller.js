app.controller('usersController', function ($scope, usersService ) {
	userService.get().then(function (msg) {
         	$scope.msg = msg;
    	});
});
app.controller('tasksController', function ($scope, taskService) {
	 taskService.get().then(function (msg) {
         	$scope.msg = msg;
         	
    	});
});
app.controller('projectsController', function ($scope, projectService) {
	projectService.get().then(function (msg) {
         	$scope.msg = msg;
         	
    	});
});
app.controller('userProjectsController', function ($scope,  $routeParams, userProjectService) {
	$scope.user_id=$routeParams.user_id;
	userProjectService.get($scope.user_id).then(function (msg) {
         	$scope.msg = msg;
         	console.log(msg);     	
    	});
});
app.controller('mainController', function ($scope,$rootScope,mainService,userProjectService, projectService) {
	mainService.get().then(function (msg) {
         	$rootScope.msg = msg;
	});
	projectService.get().then(function (proj) {
         	$rootScope.proj = proj;
         	
    	});
	
	$rootScope.userData=function(id){
		$rootScope.userDet=_.filter($rootScope.msg.data.users,{'user_id':id});
		userProjectService.get(id).then(function (userProj) {
         	$rootScope.userProj = userProj;
         	console.log(userProj);     	
    	});
		
		
	}
	
	
});


