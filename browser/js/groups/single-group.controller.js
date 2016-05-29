app.controller('SingleGroupCtrl', function($scope, group) {
	$scope.group = group;

    $scope.items = [];
    for (var i = 0; i < 1000; i++) {
      $scope.items.push(i);
    }

});

