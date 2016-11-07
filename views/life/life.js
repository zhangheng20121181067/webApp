/**
 * Created by hxsd on 2016/9/30.
 */
myapp.controller("lifeCtrl",function($scope,$http,$ionicModal) {
   /* $scope.data = {};
    $scope.data.info = "";
    */
    $http.get("views/life/life.json").success(function(data){
          $scope.comments=data;
        // 构造模式对话框
        $ionicModal.fromTemplateUrl('views/life.html', {
            scope: $scope,       // 作用域使用父作用域
            animation: 'slide-in-right'
//          animation: 'scale-in'
        }).then(function(modal) {
            $scope.modal = modal;
        });
    });

    $scope.openModal = function() {
        $scope.modal.show();
    };

    $scope.closeModal = function() {
        $scope.modal.hide();
    };
     // 创建新动态
     $scope.send = function () {
         $scope.comments.unshift({
             imgsrc: "images/05.jpg",
             user: "一缕清风",
             //info:alert($scope.replay)
             info: $scope.pinglun
         });
         $scope.modal.hide();// 隐藏
     };
})
myapp.controller("huiFu",function($scope) {
    $scope.haha=[];
    //评论
 $scope.huifu= function() {
 $scope.haha.push({rep:"一缕清风："+$scope.replay});
     $scope.replay="";
 };
})

myapp.controller("zancai",function($scope) {
    $scope.zan=0;
    $scope.cai=0;
    $scope.zana=function(){
        ++$scope.zan;
    }
    $scope.caia=function(){
        ++$scope.cai;
    }
})