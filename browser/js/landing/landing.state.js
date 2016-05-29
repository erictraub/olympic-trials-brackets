app.config(function ($stateProvider) {
    $stateProvider.state('landing', {
        url: '/landing',
        templateUrl: 'js/landing/landing.template.html',
        controller: 'LandingCtrl',
        resolve: {
        	currentUser: function(AuthService) {
        		return AuthService.getLoggedInUser();
        	}
        }
    });
});