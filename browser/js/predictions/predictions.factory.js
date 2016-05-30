app.factory('PredictionFactory', function($http) {
	var PredictionFactory = {};

	PredictionFactory.createPrediction = function(prediction) {
		return $http.post('/api/predictions', prediction)
		.then(function(prediction) {
			return prediction.data;
		});
	};

	PredictionFactory.fetchAllForGroup = function(groupId) {
		return $http.get('/api/predictions?group=' + groupId)
		.then(function(predictions) {
			return predictions.data;
		});
	};


	return PredictionFactory;
});