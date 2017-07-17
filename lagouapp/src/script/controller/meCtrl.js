'use strict';
angular.module('app').controller('meCtrl', ['$state','cache','$http', '$scope', function($state,cache,$http, $scope){
    //若name存在说明已经登录
    if(cache.get('name')){
        $scope.name = cache.get('name');
        $scope.image = cache.get('image');
    }
    $scope.logout = function () {
        cache.remove('id');
        cache.remove('name');
        cache.remove('image');
        $state.go('main');
    };
}]);
