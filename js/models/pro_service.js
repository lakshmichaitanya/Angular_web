app.factory('userService', function ($http) {
    return {
        get: function () {
        		
                     return $http.get('/js/modules/user.json');
        }
    };
});
app.factory('taskService', function ($http) {
    return {
        get: function () {
                     return $http.get('/js/modules/task.json');
        }
    };
});
app.factory('projectService', function ($http) {
    return {
        get: function () {
                     return $http.get('/js/modules/project.json');
        }
    };
});
app.factory('userProjectService', function ($q,$http) {
    return {
        get: function (user_id) {
        	  var defer = $q.defer();
        	  var arr=[];
                  $http.get('/js/modules/project.json').success(function(msg){
               		for(var i=0; i < msg.projects.length;i++){
        			for(var j=0;j < msg.projects[i].project_members.user_id.length; j++) {
         				if(user_id == msg.projects[i].project_members.user_id[j]){
			         		arr.push(msg.projects[i]);
         				}
        			}	
        		}
        		defer.resolve(arr);
		});
		return defer.promise;
        }
    };
});
app.factory('mainService', function ($http) {
    return {
        get: function () {
                     return $http.get('/js/modules/user.json');
        }
    };
});
