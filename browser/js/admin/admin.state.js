app.config(function ($stateProvider) {
    $stateProvider.state('admin', {
        url: '/admin',
        templateUrl: 'js/admin/admin.template.html',
        controller: 'AdminCtrl',
        resolve: {
        	user: function(AuthService, $state) {
        		AuthService.getLoggedInUser()
        		.then(function(user) {
        			if (!user || !user.isAdmin) $state.go('login');
        		});
        	}
        }
    });
});