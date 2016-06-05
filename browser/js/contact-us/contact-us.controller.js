app.controller('ContactUsCtrl', function($scope, currentUser, MessageFactory) {
	$scope.currentUser = currentUser;
	$scope.message = {};
	$scope.message.from = $scope.currentUser._id;
	$scope.messageSent = false;


	$scope.sendMessage = function() {
		console.log('message before', $scope.message)
		MessageFactory.createMessage($scope.message)
		.then(function(message) {
			console.log('Message from db: ', message);
			$scope.messageSent = true;
			$scope.message = {};
			$scope.message.from = $scope.currentUser._id;
		});
	};

});