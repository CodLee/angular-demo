angular.module('phoneApp').controller("ListController",["$scope","$http",function($scope,$http){
	//从服务器上获取手机列表数据
	$http.get("http://localhost:3000/phones/phones.json").success(function(response){
		console.log(response);
		$scope.phones = response;
	});
}]);