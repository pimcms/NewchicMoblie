
angular.module('dataList',[]).config('$routeProvider',function($routeProvider){
	$routeProvider.when('product',{templateUrl:'category.html',controller: ncListCtrl}).
	$routeProvider.when('product',{templateUrl:'product.html',controller: ncDetailCtrl}).
	otherwise({redirectTo: '/error.html'});
})
