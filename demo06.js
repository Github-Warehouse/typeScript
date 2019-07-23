"use strict";
//变量的作用域
// var appearance:string='hello'
// function scope():void {
//     var appearance:string = '喵'
//     console.log(appearance);
// }
// scope()
// console.log(appearance);
//全局变量，局部变量
//let
function scope() {
    var appearanceA = '狗';
    {
        var appearanceB = '猫';
        console.log(appearanceB);
    }
    console.log(appearanceA);
}
scope();
