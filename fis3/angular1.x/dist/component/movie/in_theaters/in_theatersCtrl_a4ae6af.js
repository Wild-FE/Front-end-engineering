angular.module("myApp.in_theatersCtrlModule",[]).controller("in_theatersCtrl",["$scope","$location","$routeParams","myService",function(t,e,o,a){var n=Number(o.page),r=10,l=n*r-10,c=0;a.myJsonp("https://api.douban.com/v2/movie/in_theaters",{start:l,count:r},function(e){console.log(e),t.result=e,c=Math.ceil(e.total/r),t.$apply()}),t.changePage=function(t){"up"==t?(n-=1,1>n&&(n=1)):"down"==t&&(n+=1,n>c&&(n=c)),e.path("/in_theaters/"+n)}}]);