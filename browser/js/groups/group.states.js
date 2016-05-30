app.config(function ($stateProvider) {
    $stateProvider.state('singleGroup', {
        url: '/singleGroup/:groupId',
        templateUrl: 'js/groups/single-group.template.html',
        controller: 'SingleGroupCtrl',
        resolve: {
            currentUser: function(AuthService) {
                return AuthService.getLoggedInUser();
            },
            group: function($stateParams, GroupFactory) {
                return GroupFactory.getById($stateParams.groupId);
            },
            predictions: function(PredictionFactory, $stateParams) {
                return PredictionFactory.fetchAllForGroup($stateParams.groupId);
            }
        }
    });
});

app.config(function ($stateProvider) {
    $stateProvider.state('groupList', {
        url: '/groupsList',
        templateUrl: 'js/groups/groups-list.template.html',
        controller: 'GroupsListCtrl',
        resolve: {
            currentUser: function(AuthService) {
                return AuthService.getLoggedInUser();
            },
            groups: function(GroupFactory, currentUser) {
                return GroupFactory.fetchAllForUser(currentUser._id);
            }
        }
    });
});

app.config(function ($stateProvider) {
    $stateProvider.state('createGroup', {
        url: '/createGroup',
        templateUrl: 'js/groups/create-group.template.html',
        controller: 'CreateGroupCtrl',
        resolve: {
        	currentUser: function(AuthService) {
        		return AuthService.getLoggedInUser();
        	}
        }
    });
});

app.config(function ($stateProvider) {
    $stateProvider.state('editGroup', {
        url: '/editGroup/:groupId',
        templateUrl: 'js/groups/edit-group.template.html',
        controller: 'EditGroupCtrl',
        resolve: {
            currentUser: function(AuthService) {
                return AuthService.getLoggedInUser();
            },
            allUsers: function(UserFactory) {
                return UserFactory.getAllUsers();
            },
            group: function($stateParams, GroupFactory) {
                return GroupFactory.getById($stateParams.groupId);
            }
        }
    });
});