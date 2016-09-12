/*--
* Author: Shane Walsh
* Assignment: WE4.1 Mobile Web Applications, Digital Skills Academy
* Date : 2016/09/12
* Ref: DSA Lecture & Workshop Notes UNIT 6 -12
* Ref: https://angularjs.org
* Ref: http://www.w3schools.com/angular/
* Ref: http://www.tutorialspoint.com/angularjs/
* Ref: http://www.w3schools.com/jsref/jsref_push.asp
* Ref: http://www.w3schools.com/jsref/jsref_splice.asp
* Ref: https://docs.angularjs.org/guide/scope
--*/

//Create Module using Angular objects module() method
var toDoApp = angular.module("taskModule", []);

//Create and register controller with this module & pass the object $scope
toDoApp.controller("toDoCtrl", function($scope){


	//Initialise our array of data 
	var	toDoTasks = [{task:'Bank', description:'Deposit Rent'},
					 {task:'Tickets', description:'Order Before Thurs'},
					 {task:'Dinner', description:'Reserve Table'}	
					 ];
	//Add data to scope
	$scope.toDoTasks = toDoTasks;

 
//Add Task method
$scope.addTask = function(){

	//Push new data to end of array
	$scope.toDoTasks.push(

		{
			task: $scope.newTask.task,
			description: $scope.newDescription.description
		}

	);
}

//Delete Task Method
$scope.deleteTask = function(index){

	//splice array for indexed item
	$scope.toDoTasks.splice(index, 1);

}

}); //Close Module