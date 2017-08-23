var demoApp = angular.module('demoApp', []);
function SimpleController($scope){
	$scope.customers = [
		{name: 'John Smith', city: 'Phoenix'},
		{name: 'John Doe', city: 'New York'},
		{name: 'Jane Doe', city: 'San Francisco'},
		{name: 'Jane Smith', city: 'Phoenix'}
	];
}
demoApp.controller('SimpleController',)