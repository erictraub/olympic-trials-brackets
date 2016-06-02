app.controller('SingleGroupCtrl', function($scope, group, currentUser, $state, menPredictions, womenPredictions) {
	$scope.group = group;
	$scope.currentUser = currentUser;
	$scope.predictions = menPredictions;
	$scope.showMen = true;
	$scope.showWomen = false;

	$scope.predictionMade = false;

	for (var i = 0; i < $scope.predictions.length; i++) {
		if ($scope.predictions[i].owner._id === $scope.currentUser._id) {
			$scope.predictionMade = true;
		}
	};


	$scope.showMenBracket = function() {
		$scope.showWomen = false;
		$scope.predictions = menPredictions;
		$scope.showMen = true;
	};

	$scope.showWomenBracket = function() {
		$scope.showMen = false;
		$scope.predictions = womenPredictions;
		$scope.showWomen = true;
	};

});

