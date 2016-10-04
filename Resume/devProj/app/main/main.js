'use strict';
angular.module('main', ['ui.router']).config(function ($stateProvider, $urlRouterProvider) {

	// ROUTING with ui.router
	$urlRouterProvider.otherwise('/main/resume');
	$stateProvider
	// this state is placed in the <ion-nav-view> in the index.html
		.state('main', {
			url: '/main',
			abstract: true,
			templateUrl: 'main/templates/menu.html',
			controller: 'MenuCtrl as menu'
		})
		.state('main.resume', {
			url: '/resume',
			views: {
				'pageContent': {
					templateUrl: 'main/templates/resume.html',
					controller: 'ResumeCtrl as ctrl'
				}
			}
		})
		.state('main.listDetail', {
			url: '/list/detail',
			views: {
				'pageContent': {
					templateUrl: 'main/templates/list-detail.html',
					// controller: '<someCtrl> as ctrl'
				}
			}
		})
		.state('main.debug', {
			url: '/debug',
			views: {
				'pageContent': {
					templateUrl: 'main/templates/debug.html',
					controller: 'DebugCtrl as ctrl'
				}
			}
		});
});