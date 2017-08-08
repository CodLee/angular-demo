angular.module('phoneApp').controller("DetailController",["$scope","$http","$routeParams",function($scope,$http,$routeParams){
	console.log($routeParams);
	$http.get("phones/" + $routeParams.id +".json").success(function(response){
		$scope.phone = response;
		$scope.bigPic = response.images[0]; //默认是第一张图片
	});

	
	$scope.setImage = function(img){
		$scope.bigPic = img;
	}
}]);