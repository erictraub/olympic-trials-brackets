app.factory('UserFactory', function($http) {
	var UserFactory = {};

	UserFactory.signup = function(signupInfo) {
		return $http.post('/api/users', signupInfo)
		.then(function(user) {
			return user.data;
		});
	};

	UserFactory.getAllUsers = function() {
		return	$http.get('/api/users')
		.then(function(users) {
			return users.data;
		});
	};

	return UserFactory;
});