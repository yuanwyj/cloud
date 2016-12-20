(function() {
	'use strict';
    // var app = angular.module('gulpAngular', []);
    // app.controller('LoginController', function($scope) {
    //     $scope.user = 'John Doe';
    //     $scope.email = 'john.doe@gmail.com';
    // });

    angular.module('gulpAngular').controller('LoginController',LoginController);

    function LoginController($scope) {
    	$scope.email = "1229102737@qq.com";    
    	$scope.password = 'john.doe@gmail.com';
    }
	// var app = angular.module('gulpAngular',[]);
	// app.controller('LoginController',['$scope',function($scope) {
	// 	if ($scope.login_form.$valid) {

	// 	} else {
	// 		$scope.login_form.$submitted = true;
	// 	}
	// }]);

	// app.directive('ngFocus', [function() {
	//   var FOCUS_CLASS = "ng-focused";
	//   return {
	//     restrict: 'A',
	//     require: 'ngModel',
	//     link: function(scope, element, attrs, ctrl) {
	//       ctrl.$focused = false;
	//       element.bind('focus', function(evt) {
	//         element.addClass(FOCUS_CLASS);
	//         scope.$apply(function() {ctrl.$focused = true;});
	//       }).bind('blur', function(evt) {
	//         element.removeClass(FOCUS_CLASS);
	//         scope.$apply(function() {ctrl.$focused = false;});
	//       });
	//     }
	//   }
	// }]);
})();