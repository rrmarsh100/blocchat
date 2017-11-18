(function() {
    function HomeCtrl(Room, $uibModal) {
        var home = this;
        home.chatRoomArray = Room.all;

        home.openNewRoomModal = function() {
        	var modalInstance = $uibModal.open({
        		templateUrl: '/templates/new_room_modal.html',
        		controller: 'ModalCtrl',
        		controllerAs: 'modal'
        	});
        };
    };

    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room', '$uibModal', HomeCtrl]);
})();
