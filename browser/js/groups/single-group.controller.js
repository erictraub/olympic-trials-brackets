app.controller('SingleGroupCtrl', function($scope, group, currentUser, $state, predictions) {
	$scope.group = group;
	$scope.currentUser = currentUser;
	$scope.predictions = predictions;

	$scope.predictionMade = false;

	for (var i = 0; i < $scope.predictions.length; i++) {
		if ($scope.predictions[i].owner._id === $scope.currentUser._id) {
			$scope.predictionMade = true;
		}
	};


});

