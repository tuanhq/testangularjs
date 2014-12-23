var app = angular.module('myApp', []);
app.controller('myController', ['$scope','myNotify','myMatch', function($scope,notify,myMatch){
  $scope.myMessage ='test';
  $scope.number = 0;
  $scope.answer =0;
  $scope.myNotify = function(msg) {
    notify(msg);
  };
  $scope.onDouble = function(number) {
    console.log(number);
   $scope.answer = myMatch.add(number,number);
  };
  
}]);
app.factory('myNotify', ['$window',function (win) {
  
  var msgs = [];
  return function(msg) {
    msgs.push(msg);
    if(msgs.length==4) {
      win.alert(msgs.join("\n"));
      msgs = [];
    }
  };
}]);

app.factory('myMatch', function () { 
  var myMatch = {
    add : function(a,b) {
      var c = a+b;
      return c;
    }
  };
  return myMatch;
  
});