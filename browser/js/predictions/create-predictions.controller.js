app.controller('CreatePredictionsCtrl', function($scope, PredictionFactory, currentUser, group, $state, menPrediction, womenPrediction) {
	$scope.group = group;
	$scope.currentUser = currentUser;
	$scope.showMen = false;
	$scope.showWomen = false;
	$scope.showOtherPs = false;
	$scope.gender;

	$scope.submitPrediction = function() {
		PredictionFactory.createPrediction($scope.prediction)
		.then(function(prediction) {
			$state.go('singleGroup', { groupId: $scope.group._id })
		});
	};



	$scope.showMenPredictions = function() {
		$scope.gender = 'men';
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
		$scope.getPredctionsBySex();
	};




	$scope.showWomenPredictions = function() {
		$scope.gender = 'women';
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
		$scope.getPredctionsBySex();
	};



	$scope.showOtherPredictions = function() {
		$scope.showOtherPs = true;
	};


	$scope.getPredctionsBySex = function() {
		PredictionFactory.fetchAllForUserBySex($scope.currentUser._id, $scope.gender)
		.then(function(predictions) {
			$scope.previousPredictions = predictions;
		});
	};


	$scope.prefillPrediction = function(prediction) {

		console.log('RAN PREFILL')

		if ($scope.gender === 'men') {
			console.log('IN MEN');
			$scope.prediction.back100 = prediction.back100;
			$scope.prediction.back200 = prediction.back200;
			$scope.prediction.breast100 = prediction.breast100;
			$scope.prediction.breast200 = prediction.breast200;
			$scope.prediction.fly100 = prediction.fly100;
			$scope.prediction.fly200 = prediction.fly200;
			$scope.prediction.free50 = prediction.free50;
			$scope.prediction.free100 = prediction.free100;
			$scope.prediction.free200 = prediction.free200;
			$scope.prediction.free400 = prediction.free400;
			$scope.prediction.free1500 = prediction.free1500;
			$scope.prediction.im200 = prediction.im200;
			$scope.prediction.im400 = prediction.im400;
			$scope.prediction.sex = 'men';
		}

		if ($scope.gender === 'women') {
			console.log('IN WOMEN')
			$scope.prediction.back100 = prediction.back100;
			$scope.prediction.back200 = prediction.back200;
			$scope.prediction.breast100 = prediction.breast100;
			$scope.prediction.breast200 = prediction.breast200;
			$scope.prediction.fly100 = prediction.fly100;
			$scope.prediction.fly200 = prediction.fly200;
			$scope.prediction.free50 = prediction.free50;
			$scope.prediction.free100 = prediction.free100;
			$scope.prediction.free200 = prediction.free200;
			$scope.prediction.free400 = prediction.free400;
			$scope.prediction.free800 = prediction.free800;
			$scope.prediction.im200 = prediction.im200;
			$scope.prediction.im400 = prediction.im400;
			$scope.prediction.sex = 'women';
		}

	};

});

