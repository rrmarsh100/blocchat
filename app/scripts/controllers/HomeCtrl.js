(function() {
  function HomeCtrl(Room, $uibModal, $scope, Message, $cookies) {
    $scope.rooms = Room.all;
    $scope.activeRoom = null;

    $scope.setActiveRoom = function(room) {
      $scope.activeRoom = room;
      $scope.messages = Message.getByRoomId($scope.activeRoom.$id);
      console.log("The active room is now " + $scope.activeRoom.$value + " with roomId " + $scope.activeRoom.$id);
      console.log("There are " + $scope.messages);
    };

    $scope.addNew = function() {
      console.log('Opening modal');
      $uibModal.open({
        templateUrl:    '/templates/new_room_modal.html',
        controller:     'ModalCtrl',
        controllerAs:   '$modal'
      });
    }


    $scope.sendMessage = function() {
      console.log("Message to save is: " + $scope.messageContent);
      console.log("User is " + $cookies.blocChatCurrentUser);
      console.log("Active room is " + $scope.activeRoom.$id);
      var newMessage = {
        content:  $scope.messageContent,
        username: $cookies.get('blocChatCurrentUser'),
        roomId:   $scope.activeRoom.$id
      };
      Message.send(newMessage);

      // Clears input area after sending message
      $scope.input.Message.$setPristine();
      $scope.messageContent = null;
    }
  }

  angular
    .module('blocChat')
    .controller('HomeCtrl', ['Room', '$uibModal', '$scope', 'Message', '$cookies', HomeCtrl])
})();
