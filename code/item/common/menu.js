angular.module('menu',[]).controller('menus',function($scope,$http){
	$scope.menus =[
		{name:'首页'},
		{name:'新闻'},
		{name:'体育'},
		{name:'娱乐'}
	];

});