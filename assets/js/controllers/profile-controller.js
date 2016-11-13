angular.module('dailytrip').controller('ProfileController', function($scope, $http) {

	$scope.profile = {};

	var response = $http.get('/profileInfo');
	response.then(function(profileInfo) {
		$scope.profile = profileInfo.data;
	}).catch(function(error) {
		console.log(error);
	});
});