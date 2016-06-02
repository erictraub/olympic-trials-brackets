app.controller('CreatePredictionsCtrl', function($scope, PredictionFactory, currentUser, group, $state, menPrediction, womenPrediction) {
	$scope.group = group;
	$scope.currentUser = currentUser;
	$scope.showMen = false;
	$scope.showWomen = false;
	// $scope.prediction = menPrediction[0] || { 
	// 		group: group._id,
	// 		owner: currentUser._id,
	// 		back100: [],
	// 		back200: [],
	// 		breast100: [],
	// 		breast200: [],
	// 		fly100: [],
	// 		fly200: [],
	// 		free50: [],
	// 		free100: [],
	// 		free200: [],
	// 		free400: [],
	// 		free1500: [],
	// 		im200: [],
	// 		im400: []
	// 	};

	$scope.submitPrediction = function() {
		console.log('prediction in submit: ', $scope.prediction)
		PredictionFactory.createPrediction($scope.prediction)
		.then(function(prediction) {
			console.log('men after', prediction)
			$state.go('singleGroup', { groupId: $scope.group._id })
		});
	};



	$scope.showMenPredictions = function() {
		$scope.showWomen = false;
		$scope.prediction = menPrediction[0] || { 
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
		$scope.prediction.sex = 'men';
		$scope.showMen = true;
		console.log('menpre:', $scope.prediction);
	};




	$scope.showWomenPredictions = function() {
		$scope.showMen = false;
		$scope.prediction = womenPrediction[0] || {
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
		$scope.prediction.sex = 'women';
		$scope.showWomen = true;
		console.log('womenpre:', $scope.prediction);
	};


});





