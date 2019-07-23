"use strict";
// function search(age: number): string {
//     return `是一个` + age + `岁的`
// }
// var age: number = 18
// var result: string = search(age)
// console.log(result);
//有可选参数的函数
// function search(age: number, height?: number) {
//     let connect: string = ''
//     connect = `年龄` + age + `岁`
//     if (height != undefined) {
//         connect = connect + height + `cm`
//     }
//     return connect + `的人`
// }
// var result: string = search(22, 178.5)
// console.log(result);
//有默认参数的函数
// function search(age: number = 18, height: number = 178.5) {
//     let connect: string = ''
//     connect = `年龄` + age + `岁`
//     if (height != undefined) {
//         connect = connect + height + `cm`
//     }
//     return connect + `的人` 
// }
// var result: string = search(22, 180)
// console.log(result);
//有剩余参数的函数
function search() {
    var xuqiu = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        xuqiu[_i] = arguments[_i];
    }
    var connect = '找到';
    for (var i = 0; i < xuqiu.length; i++) {
        connect = connect + xuqiu[i];
        if (i < xuqiu.length - 1) {
            connect = connect + "\u3001";
        }
    }
    connect = connect + "\u7684\u4EBA";
    return connect;
}
var result = search('22', '180');
console.log(result);
