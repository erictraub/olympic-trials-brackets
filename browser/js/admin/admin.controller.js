app.controller('AdminCtrl', function($scope, GroupFactory, PredictionFactory, UserFactory, MessageFactory) {

	$scope.updateUser = function() {
		UserFactory.updateUser($scope.userId, $scope.updateProp, $scope.updateKey)
		.then(function(updatedUser) {
			console.log('Updated user: ', updatedUser);
		});
	};

	$scope.getAllMessages = function() {
		MessageFactory.getAllMessages()
		.then(function(messages) {
			$scope.allMessages = messages;
		});
	};

	$scope.getAllUsers = function() {
		UserFactory.getAllUsers()
		.then(function(users) {
			$scope.allUsers = users;
		});
	};

});