//函数声明法
// function add(n1: number, n2: number): number {
//     return n1 + n2
// }
// console.log(add(1, 2));

//函数表达式法
// var add = function (n1: number, n2: number): number {
//     return n1 + n2
// }
// console.log(add(1, 2));

//完全支持ES6，箭头函数
var add = (n1: string, n2: string): string => {
    return n1 + n2
}
console.log(add('1', '2'));