/**
 * Created by hxsd on 2016/10/4.
 */
/**
 * Created by hxsd on 2016/9/30.
 */
myapp.controller("homeCtrl",function($scope,$http) {
    $http.get("views/home/zuopin/zuopin.json").success(function(data){
        $scope.pics=data;
    })
})