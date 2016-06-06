app.factory('GroupFactory', function($http) {

	var cachedMembers = [];

	var GroupFactory = {};

	GroupFactory.createGroup = function(groupName, creatorId) {
		return $http.post('/api/groups', { name: groupName, creator: creatorId, members: [creatorId] })
		.then(function(group) {
			return group.data;
		});
	};

	GroupFactory.getById = function(groupId) {
		return $http.get('/api/groups/' + groupId)
		.then(function(group) {
			return group.data;
		});
	};

	GroupFactory.addMemberToGroup = function(userEmail, groupId) {
		return $http.put('/api/groups/' + groupId + '/members', { userEmail: userEmail })
		.then(function(addedUser) {
			var present = false;

			for (var i = 0; i < cachedMembers.length; i++) {
				if (cachedMembers[i]._id === addedUser.data._id) present = true;
			}

			if (!present && addedUser.data !== 'user not found') {
				cachedMembers.push(addedUser.data);
				return 'member added';
			} else if (addedUser.data === 'user not found') {
				return 'user not found';
			} else {
				return 'member already in group';
			}
		});
	};

	GroupFactory.addMemberToG = function(userEmail, groupId) {
		return $http.put('/api/groups/' + groupId + '/members', { userEmail: userEmail })
		.then(function(addedUser) {

			if (addedUser.data === 'user not found') {
				return 'user not found';
			} else {
				return 'member added to group';
			}
		});
	};






	GroupFactory.fetchAllMembers = function(groupId) {
		return $http.get('/api/groups/' + groupId + '/members')
		.then(function(members) {
			angular.copy(members.data, cachedMembers);
			return cachedMembers;
		});
	};

	GroupFactory.fetchAllForUser = function(memberId) {
		return $http.get('/api/groups' + '?members=' + memberId)
		.then(function(groups) {
			return groups.data;
		});
	};

	GroupFactory.deleteMemberFromGroup = function(groupId, memberId) {
		return $http.put('/api/groups/' + groupId + '/removeMember/' + memberId)
		.then(function(group) {
			angular.copy(group.data.members, cachedMembers);
			return cachedMembers;
		});
	};

	GroupFactory.fetchAllForCreator = function(userId) {
		return $http.get('/api/groups' + '?creator=' + userId)
		.then(function(groups) {
			return groups.data;
		});
	};


	return GroupFactory;
});



