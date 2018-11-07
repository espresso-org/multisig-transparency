(
  function () {
    document.title = config.pageTitle;
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
