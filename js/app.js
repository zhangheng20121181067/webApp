/**
 * Created by hxsd on 2016/9/29.
 */
var myapp=angular.module("myapp",["ionic"]);
//配置路由：依赖注入两个对象：$stateProvider，$urlRouterProvider
myapp.config(function($stateProvider,$urlRouterProvider,$ionicConfigProvider){
    $ionicConfigProvider.tabs.position('bottom');
    $stateProvider.state("tour",{
            url:"/tour",
            templateUrl:"views/tour/tour.html",
            controller:"tourCtrl"
        })
        .state("login",{
        url:"/login",
        templateUrl:"views/login/login.html",    //指向页面子模板路径
        controller:"loginCtrl"
        })
        .state("tabs",{
            url:"/tabs",
            abstract:true,  /*抽象的-意思是不具体化，不真的显示它*/
            templateUrl:"views/tabs/tabs.html"
            /*controller:"tourCtrl"*/
        })
        .state("tabs.home",{
            url:"/home",
            views:{"tab-home":{
                templateUrl:"views/home/home.html",
                controller:"homeCtrl"}
            }
        })
        .state("tabs.life",{
            url:"/life",
            views:{"tab-life":{
                templateUrl:"views/life/life.html",
                controller:"lifeCtrl"}
            }
        })
        .state("tabs.addressList",{
            url:"/addressList",
            views:{"tab-addressList":{
                templateUrl:"views/addressList/addressList.html",
                controller:"addressListCtrl"}
            }
        })
        .state("tabs.gear",{
            url:"/gear",
            views:{"tab-gear":{templateUrl:"views/gear/gear.html"}}
        })
        .state("tabs.setting",{
            url:"/setting",
            views:{"tab-gear":{templateUrl:"views/setting/setting.html"}}
        })

    //默认路由
    $urlRouterProvider.otherwise("/tour")
    /*$urlRouterProvider.otherwise("/tabs/home")*/
})

