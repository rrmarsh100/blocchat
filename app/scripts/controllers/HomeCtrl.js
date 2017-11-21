(function() {
  function HomeCtrl(Room, $uibModal, $scope, Message) {
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
  }

  angular
    .module('blocChat')
    .controller('HomeCtrl', ['Room', '$uibModal', '$scope', 'Message', HomeCtrl])
})();
