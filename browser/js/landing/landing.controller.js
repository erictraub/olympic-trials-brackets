app.controller('LandingCtrl', function($scope, currentUser) {
	$scope.currentUser = currentUser;
	console.log('Current user:', $scope.currentUser);
});