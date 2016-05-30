app.controller('CreatePredictionsCtrl', function($scope, PredictionFactory, currentUser, group, $state) {
	$scope.group = group;
	$scope.currentUser = currentUser;
	$scope.prediction = { 
		group: group._id,
		owner: currentUser._id,
		back100: [],
		back200: [],
		breast100: [],
		breast200: [],
		fly100: [],
		fly200: [],
		free50: [],
		free100: [],
		free200: [],
		free400: [],
		free1500: [],
		im200: [],
		im400: []
	};

	$scope.submitPrediction = function() {
		PredictionFactory.createPrediction($scope.prediction)
		.then(function(prediction) {
			$state.go('singleGroup', { groupId: $scope.group._id })
		});
	};

});