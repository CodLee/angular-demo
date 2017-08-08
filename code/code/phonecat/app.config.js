//配置路由
angular.module('phoneApp').config(['$routeProvider',function($routeProvider){
	$routeProvider
		.when('/',{
			templateUrl : 'views/list.html',
			controller : 'ListController'
		})
		.when('/:id',{
			templateUrl : "views/detail.html",
			controller : 'DetailController'
		})
		.otherwise({
			redirectTo: "/"
		});
}]);