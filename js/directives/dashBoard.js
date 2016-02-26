app.directive('proController', function(userService){
	return {
		restrict: 'AE',
		templateUrl: '../views/users.html'
			   		
		}
	
});
app.directive('proController1', function(projectService){
	return {
		restrict: 'AE',
		templateUrl: '../views/projects.html'
		
		}
	
});
