app.config(function ($stateProvider) {
    $stateProvider.state('contactUs', {
        url: '/contactUs',
        templateUrl: 'js/contact-us/contact-us.template.html',
        controller: 'ContactUsCtrl',
        resolve: {
            currentUser: function(AuthService) {
                return AuthService.getLoggedInUser();
            }
        }
    });
});