/**
 * Created by hxsd on 2016/9/29.
 */
angular.module("myapp")
    .controller("tourCtrl", function ($scope, $ionicSlideBoxDelegate) {
        $scope.config={enter:false};
        $scope.onSlideChanged=function(){
            if($ionicSlideBoxDelegate.currentIndex()==$ionicSlideBoxDelegate.slidesCount()-1){
                $scope.config.enter=true;
            }else{
                $scope.config.enter=false;
            }
        }
    })