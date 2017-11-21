(function() {
  function UsernameModalCtrl($scope, $uibModalInstance, $cookies) {
    var $userModal = this;

    $userModal.save = function() {
      console.log('$userModal', $userModal)
      $cookies.put('blocChatCurrentUser', $userModal.username);
      console.log("Current user is " + $cookies.blocChatCurrentUser);
      $uibModalInstance.close();
    };
  }

  angular
    .module('blocChat')
    .controller('UsernameModalCtrl', ['$scope', '$uibModalInstance', '$cookies', UsernameModalCtrl])
})();
