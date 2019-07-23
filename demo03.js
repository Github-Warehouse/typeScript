"use strict";
var age = 18;
var height = 178.5;
console.log(age);
console.log(height);
console.log('===================');
var js = 'javaScript';
console.log(js);
console.log('===================');
//boolean
var T = true;
var F = false;
//enum 枚举类型
var REN;
(function (REN) {
    REN["man"] = "\u7537\u4EBA";
    REN["woman"] = "\u5973\u4EBA";
    REN["yao"] = "\u4E2D";
})(REN || (REN = {}));
console.log(REN.woman);
console.log('===================');
//any 类型
var t = 10;
t = 'web';
t = true;
console.log(t);
//null
