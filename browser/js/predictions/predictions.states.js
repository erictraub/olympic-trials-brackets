app.config(function ($stateProvider) {
    $stateProvider.state('createPredictions', {
        cache: false,
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
            menPrediction: function (PredictionFactory, $stateParams) {
                return PredictionFactory.getOne($stateParams.groupId, $stateParams.userId, 'men');
            },
            womenPrediction: function (PredictionFactory, $stateParams) {
                return PredictionFactory.getOne($stateParams.groupId, $stateParams.userId, 'women');
            }
        }
    });
});