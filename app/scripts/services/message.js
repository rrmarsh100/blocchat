(function() {
  function Message($firebaseArray) {
    var Message = {};
    var ref = firebase.database().ref().child("messages");
    var messages = $firebaseArray(ref);

    Message.all = messages;

    Message.getByRoomId = function(roomId) {
      return $firebaseArray(ref.orderByChild('roomId').equalTo(roomId));
    };


    Message.send = function(newMessage) {
      newMessage.sentAt = firebase.database.ServerValue.TIMESTAMP;
      console.log(newMessage);
      messages.$add(newMessage);
      console.log("Message saved");
    };

    return Message;
  }

  angular
    .module('blocChat')
    .factory('Message', ['$firebaseArray', Message])
})();
