angular.module('article',[]).controller('articles',function($scope,$http){
	$http.jsonp('../datas/news.json').success((res)=>{
		if(res){
			$scope.articleList = res;		
		}
	}).error((res)=>{
		alert('articles datas error');
	})

});