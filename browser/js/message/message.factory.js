app.factory('MessageFactory', function($http) {
	var MessageFactory = {};

	MessageFactory.getAllMessages = function() {
		return $http.get('/api/messages')
		.then(function(messages) {
			return messages.data;
		});
	};

	MessageFactory.createMessage = function(messageData) {
		return $http.post('/api/messages', messageData)
		.then(function(message) {
			return message.data;
		}) 
	};

	return MessageFactory;
});