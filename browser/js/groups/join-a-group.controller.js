app.controller('JoinAGroupCtrl', function($scope, currentUser, userGroups, GroupFactory, UserFactory) {
	$scope.currentUser = currentUser;
	$scope.groupClicked = false;
	$scope.noGroupsForUser = false;
	$scope.chosenGroup;

	$scope.search = function() {
		$scope.noGroupsForUser = false;
		$scope.groups = null;
		$scope.userNotFound = false;
		$scope.groupClicked = false;
		UserFactory.getByEmail($scope.emailSearched)
		.then(function(user) {
			if (user.length === 0) {
				return 'user not found'
			};
			return GroupFactory.fetchAllForCreator(user[0]._id);
		})
		.then(function(groups) {
			if (groups === 'user not found') {
				$scope.userNotFound = true;
				console.log(groups)
			} else {
				if (!groups.length) {
					$scope.noGroupsForUser = true;
					return;
				};
				$scope.userNotFound = false;
				$scope.groups = groups;
			}
		});
	};

	$scope.joinGroup = function(group) {
		GroupFactory.addMemberToG(currentUser.email, group._id)
		.then(function(message) {
			$scope.chosenGroup = group;
			$scope.groupClicked = true;
			$scope.emailSearched = '';
			console.log('Message: ',message);
		});
	};

});