(function() {
    function Room($firebaseArray) {
        var room = {};
        var ref = firebase.database().ref().child("rooms");
        var rooms = $firebaseArray(ref);

        room.all = rooms;

        room.addNewRoom = function(roomName) {
            rooms.$add(roomName).then(function(ref) {
                var id = ref.key;
                console.log("added " + room + " with id of " + id);
                rooms.$indexFor(id);
            });
        };

        return room;
    }

    angular
        .module('blocChat')
        .factory('Room', ['$firebaseArray', Room]);
})();
