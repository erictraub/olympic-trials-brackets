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
					$('#alt2').fadeOut();
				}, 6000)
			}
			else if(message === 'user not found') {
				$scope.memberAlreadyPresent = false;
				$scope.userNotFound = true;
				setTimeout(function() {
					$('#alt1').fadeOut();
				},15000)
			}
			else if (message === 'member added') {
				$scope.memberAlreadyPresent = false;
				$scope.userNotFound = false;
				$scope.memberAdded = false;
				$scope.memberAdded = true;
				setTimeout(function() {
					$('#alt3').fadeOut();
				}, 6000)
			}
		});
	};


});