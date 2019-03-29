
angular.module('DailyPlannerApp', [])
  .controller('DailyPlannerController', function() {
    var dailyPlanner = this;
    dailyPlanner.todos = [
      {text:'Finish Homework', done:true},
     {text:'Wash Dishes', done:true},
      {text:'Schedule Appointment with Dr. Henderson', done:true}
    ];
      
     
    dailyPlanner.addTodo = function() {
      dailyPlanner.todos.push({text:dailyPlanner.todoText, done:false});
      dailyPlanner.todoText = '';
    };
 
    dailyPlanner.remaining = function() {
      var count = 0;
      angular.forEach(dailyPlanner.todos, function(todo) {
        count += todo.done ? 1 : 1;
      });
      return count;
    };
 
    dailyPlanner.archive = function() {
      var oldTodos = dailyPlanner.todos;
     dailyPlanner.todos = [];
      angular.forEach(oldTodos, function(todo) {
        if (!todo.done) dailyPlanner.todos.push(todo);
      });
    };
  });

