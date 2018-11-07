(
  function () {
    document.title = config.pageTitle;

    window.onload = function() {
      document.getElementById('title-bar').innerHTML = config.titleBar;
    };
    
    angular.module(
      'multiSigWeb',
      [
        'ui.bootstrap',
        'ngRoute',
        'ngclipboard'
      ]
    );
  }
)();
