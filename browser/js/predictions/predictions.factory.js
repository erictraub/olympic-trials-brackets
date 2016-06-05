app.factory('PredictionFactory', function($http) {
	var PredictionFactory = {};

	PredictionFactory.createPrediction = function(prediction) {
		return $http.post('/api/predictions', prediction)
		.then(function(prediction) {
			return prediction.data;
		});
	};

	PredictionFactory.fetchAllForGroup = function(groupId, sex) {
		return $http.get('/api/predictions?group=' + groupId + '&sex=' + sex)
		.then(function(predictions) {
			return predictions.data;
		});
	};

	PredictionFactory.getOne = function(groupId, userId, sex) {
		return $http.get('/api/predictions?group=' + groupId + '&owner=' + userId + '&sex=' + sex)
		.then(function(prediction) {
			return prediction.data;
		});
	};

	PredictionFactory.fetchAllForUserBySex = function(userId, sex) {
		return $http.get('/api/predictions?owner=' + userId + '&sex=' + sex)
		.then(function(predictions) {
			return predictions.data;
		});
	};


	return PredictionFactory;
});