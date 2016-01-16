angular.module('dataList', []).
  config(['$routeProvider', function($routeProvider) {
  $routeProvider.
      when('/product', {templateUrl: '/category.html',   controller: PhoneListCtrl}).
      when('/phones/:phoneId', {templateUrl: 'partials/phone-detail.html', controller: PhoneDetailCtrl}).
      otherwise({redirectTo: '/phones'});
}]);