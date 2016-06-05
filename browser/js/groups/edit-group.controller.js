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
			if (message === 'member already in group') {
				$scope.userNotFound = false;
				$scope.memberAdded = false;	
				$scope.memberAlreadyPresent = true;	
				setTimeout(function() {
					$scope.memberAlreadyPresent = false;
					$scope.$evalAsync();
				}, 5000)
			}
			else if(message === 'user not found') {
				$scope.memberAlreadyPresent = false;
				$scope.memberAdded = false;	
				$scope.userNotFound = true;
				setTimeout(function() {
					$scope.userNotFound = false;
					$scope.$evalAsync();
				},14000)
			}
			else if (message === 'member added') {
				$scope.memberAlreadyPresent = false;
				$scope.userNotFound = false;
				$scope.memberAdded = true;
				setTimeout(function() {
					$scope.memberAdded = false;
					$scope.$evalAsync();
				}, 4000)
			}
		});
	};

	$scope.deleteMember = function(member) {
		GroupFactory.deleteMemberFromGroup($scope.group._id, member._id)
		.then(function(members) {
			console.log('members back',members);
		});
	};


});