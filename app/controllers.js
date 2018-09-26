'use strict';

var app = angular.module('kenTodoApp.controller', []);

app.controller('todoController', ['$scope', function($scope) {
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
}]);