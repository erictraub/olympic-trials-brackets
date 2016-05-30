app.controller('SingleGroupCtrl', function($scope, group, currentUser, $state, predictions) {
	$scope.group = group;
	$scope.currentUser = currentUser;
	$scope.predictions = predictions;

});

