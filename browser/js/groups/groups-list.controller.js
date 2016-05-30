app.controller('GroupsListCtrl', function($scope, currentUser, groups) {
	$scope.currentUser = currentUser;
	$scope.groups = groups;

});