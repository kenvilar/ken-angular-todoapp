'use strict';

var app = angular.module('kenTodoApp.controller', []);

app.controller('todoController', ['$scope', '$filter', function($scope, $filter) {
	$scope.newTodo = '';

	$scope.todoList = [
		{
			desc: 'Make a coffee',
			done: false,
		},
		{
			desc: 'Read a book',
			done: false,
		},
		{
			desc: 'Study AngularJS',
			done: false,
		},
	];

	$scope.pendingCount = 3;

	$scope.addTodo = () => {
		$scope.todoList.push({
			desc: $scope.newTodo,
			done: false,
		});

		$scope.newTodo = '';
	};

	$scope.deleteTodo = (todo) => {
		$scope.todoList.splice(todo, 1)
	};

	$scope.$watch('todoList', function() {
		$scope.pendingCount = $filter('filter')($scope.todoList, {done: false}).length;
	}, true);

	$scope.clearCompleteTodo = () => {
		$scope.todoList = $filter('filter')($scope.todoList, {done: false});
	};
}]);