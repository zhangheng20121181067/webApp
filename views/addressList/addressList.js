/**
 * Created by hxsd on 2016/9/30.
 */
myapp.controller("addressListCtrl",function($scope,$ionicModal){
    $scope.contacts = [
        { name: '雯雯', email:"wenwen@163.com" },
        { name: '静静', email:"jingjing@163.com" },
        { name: '菲菲', email:"feifei@163.com"},
        { name: '小方', email:"xiaofang@163.com"},
        { name: '小志', email:"xiaozhi@163.com"},
        { name: '小伟', email:"xiaowei@163.com"},
        { name: '小炮', email:"xiaopao@163.com"},
        { name: '聪', email:"cong@163.com"}
    ];

    $scope.delete=function(contact){
        var index=$scope.contacts.indexOf(contact);
        $scope.contacts.splice(index,1);
    }

    // 构造模式对话框
    $ionicModal.fromTemplateUrl('views/modal.html', {
        scope: $scope,       // 作用域使用父作用域
//                        animation: 'slide-in-up'
        animation: 'slide-in-left'
//                        animation: 'slide-in-right'
//                        animation: 'scale-in'
    }).then(function(modal) {
        $scope.modal = modal;
    });

    $scope.openModal = function() {
        $scope.modal.show();
    };

    $scope.closeModal = function() {
        $scope.modal.hide();
    };

    // 创建新联系人
    $scope.createContact = function(newContact) {
        $scope.contacts.push({ name: newContact.username,email: newContact.email});
        /*$scope.contacts.name="";
        $scope.contacts.email="";*/
        $scope.modal.hide();    // 隐藏
    };

   /*  离开时清除model
    $scope.$on('$destroy', function() {
        $scope.modal.remove();
    });*/

     /*在隐藏modal时执行一些动作
    $scope.$on('modal.hidden', function() {
        // 在这里执行一些操作
    });*/

     /*在移除modal时执行一些动作
    $scope.$on('modal.removed', function() {
        // 在这里执行一些操作
    });*/
});