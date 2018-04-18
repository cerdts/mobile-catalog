angular.module('app.routes', ['ionicUIRouter'])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    

      .state('tabsController.home', {
    url: '/home',
    views: {
      'tab1': {
        templateUrl: 'templates/home.html',
        controller: 'homeCtrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.search'
      2) Using $state.go programatically:
        $state.go('tabsController.search');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /tabs/tab1/search
      /tabs/tab2/search
  */
  .state('tabsController.search', {
    url: '/search',
    views: {
      'tab1': {
        templateUrl: 'templates/search.html',
        controller: 'searchCtrl'
      },
      'tab2': {
        templateUrl: 'templates/search.html',
        controller: 'searchCtrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.settings'
      2) Using $state.go programatically:
        $state.go('tabsController.settings');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /tabs/tab1/settings
      /tabs/tab3/settings
  */
  .state('tabsController.settings', {
    url: '/settings',
    views: {
      'tab1': {
        templateUrl: 'templates/settings.html',
        controller: 'settingsCtrl'
      },
      'tab3': {
        templateUrl: 'templates/settings.html',
        controller: 'settingsCtrl'
      }
    }
  })

  .state('tabsController', {
    url: '/tabs',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

  .state('tabsController.list', {
    url: '/list',
    views: {
      'tab1': {
        templateUrl: 'templates/list.html',
        controller: 'listCtrl'
      }
    }
  })

  .state('tabsController.productOverview', {
    url: '/details',
	params: {
		product: ""		
},
    views: {
      'tab1': {
        templateUrl: 'templates/productOverview.html',
        controller: 'productOverviewCtrl'
      }
    }
  })

$urlRouterProvider.otherwise('/tabs/home')


});