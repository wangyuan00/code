'use strict';
//所有的provider都是对模块或服务器进行配置
angular.module('app').config(['$validationProvider',function ($validationProvider) {
    //表单对象校验是否符合要求
    var expression = {
        phone:/^1[\d]{10}$/,
        password:function (value) {
            var str = value + '';
            return str.length>5;
        },
        required:function (value) {
            return !!value;
        }
    };
    //错误提示
    var defaultMsg = {
        phone:{
            success:'',
            error:'必须是11位手机号'
        },
        password:{
            success:'',
            error:'长度至少6位'
        },
        required:{
            success:'',
            error:'不能为空'
        }
    };
    //配置校验规则 和提示语
    $validationProvider.setExpression(expression).setDefaultMsg(defaultMsg);
}]);