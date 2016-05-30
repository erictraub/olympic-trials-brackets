app.config(function ($stateProvider) {
    $stateProvider.state('createPredictions', {
        url: '/createPredictions/:groupId/:userId',
        templateUrl: 'js/predictions/create-predictions.template.html',
        controller: 'CreatePredictionsCtrl',
        resolve: {
            currentUser: function(AuthService) {
                return AuthService.getLoggedInUser();
            },
            group: function($stateParams, GroupFactory) {
                return GroupFactory.getById($stateParams.groupId);
            },
            prediction: function (PredictionFactory, $stateParams) {
                return PredictionFactory.getOne($stateParams.groupId, $stateParams.userId);
            }
        }
    });
});