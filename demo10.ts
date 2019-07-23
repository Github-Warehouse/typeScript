//RegExp

//构造函数声明法
// let reg1: RegExp = new RegExp('web')
// console.log(reg1);
// let reg2: RegExp = new RegExp('web', 'gi')
// console.log(reg2);

//字面量声明
// let reg3: RegExp = /web/
// let reg4: RegExp = /web/gi

//test(string) exec(string)
let reg1: RegExp = /baidu/i
let website: string = 'www.baidu.com'
// let res: boolean = reg1.test(website)
console.log(reg1.exec(website));
