/**
 * Created by hxsd on 2016/9/30.
 */
//页面控制器
myapp.controller("loginCtrl",function($scope){
    $scope.data={};
    $scope.disappar=function(){
        $scope.data.user="";
        $scope.data.mima="";
    }

});