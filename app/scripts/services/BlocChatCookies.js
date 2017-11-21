(function() {
  function BlocChatCookies($cookies, $uibModal) {
    var currentUser = $cookies.get('blocChatCurrentUser');

    if (!currentUser || currentUser === '') {
      $uibModal.open({
        templateUrl:  '/templates/username_modal.html',
        controller:   'UsernameModalCtrl',
        controllerAs: '$userModal',
        size:         'sm',
        backdrop:     'static',
        keyboard:     false
      });
    }
    else {
      console.log('Current user is ' + currentUser);
    }
  }

  angular
    .module('blocChat')
    .run(['$cookies', '$uibModal', BlocChatCookies])
})();
