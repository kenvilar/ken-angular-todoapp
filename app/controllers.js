'use strict';

var app = angular.module('kenTodoApp.controller', []);

app.controller('todoController', ['$scope', function($scope) {
	$scope.newTask = '';
}]);