app.controller('CreatePredictionsCtrl', function($scope, PredictionFactory, currentUser, group, $state, prediction) {
	$scope.group = group;
	$scope.currentUser = currentUser;
	$scope.prediction = prediction[0] || { 
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


	// if (!prediction) {
	// 	$scope.prediction = 
	// 		{ 
	// 			group: group._id,
	// 			owner: currentUser._id,
	// 			back100: [],
	// 			back200: [],
	// 			breast100: [],
	// 			breast200: [],
	// 			fly100: [],
	// 			fly200: [],
	// 			free50: [],
	// 			free100: [],
	// 			free200: [],
	// 			free400: [],
	// 			free1500: [],
	// 			im200: [],
	// 			im400: []
	// 		};
	// }
	// else {
	// 	var pre = {};

	// 	for (var key in prediction) {
	// 		if (!prediction[key]) prediction[key] = [];
	// 		else {
	// 			var tempArr = [];
	// 			for (var prop in prediction[key]) {
	// 				tempArr[prop] = 
	// 			}
	// 		}
	// 	}
	// }


	console.log('prediction: ',$scope.prediction)

	$scope.submitPrediction = function() {
		console.log('prediction in submit: ', $scope.prediction)
		PredictionFactory.createPrediction($scope.prediction)
		.then(function(prediction) {
			$state.go('singleGroup', { groupId: $scope.group._id })
		});
	};

});