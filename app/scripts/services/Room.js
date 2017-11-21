(function() {
  function Room($firebaseArray) {
    var Room = {};
    var ref = firebase.database().ref().child("rooms");
    var rooms = $firebaseArray(ref);

    rooms.$loaded().then(function(arr) {
      console.log("Number of rooms: " + arr.length);
    });

    Room.all = rooms;

    Room.add = function(room) {
      rooms.$add(room);
    }

    return Room;
  }

  angular
    .module('blocChat')
    .factory('Room', ['$firebaseArray', Room])
})();
