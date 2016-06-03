app.controller('CreateGroupCtrl', function($scope, currentUser, GroupFactory, $state) {
	$scope.currentUser = currentUser;
	$scope.groupName = '';

	$scope.createGroup = function() {
		GroupFactory.createGroup($scope.groupName, currentUser._id)
		.then(function(group) {
			console.log('Created group:', group)
			$state.go('editGroup', { groupId: group._id });
		});
	};
});