app.controller('EditGroupCtrl', function($scope, GroupFactory, group) {
	$scope.group = group;
	console.log('group', $scope.group)
	$scope.memberAlreadyPresent = false;
	$scope.userNotFound = false;
	$scope.memberAdded = false;
	
	GroupFactory.fetchAllMembers(group._id)
	.then(function(members) {
		$scope.members = members;
	});

	$scope.addUserToGroup = function() {
		GroupFactory.addMemberToGroup($scope.searchedEmail, $scope.group._id)
		.then(function(message) {
			$scope.searchedEmail = '';
			console.log(message)
			if (message === 'member already in group') {
				$scope.userNotFound = false;
				$scope.memberAlreadyPresent = true;
			}
			else if(message === 'user not found') {
				$scope.memberAlreadyPresent = false;
				$scope.userNotFound = true;
			}
			else if (message === 'member added') {
				$scope.memberAlreadyPresent = false;
				$scope.userNotFound = false;
				$scope.memberAdded = true;
			}
		});
	};


});