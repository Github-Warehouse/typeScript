// //面向对象--修饰符
// //public 公共的
// //protected 受保护的
// //private 私有的
// class B {
//     /**
//      * sex
//      * name
//      * age
//      */
//     public sex: string
//     public name: string
//     private age: number
//     public constructor(sex: string, name: string, age: number) {
//         this.sex = sex
//         this.name = name
//         this.age = age
//     }

//     public sayHello() {
//         console.log('hello world !');
//     }

//     private sayAge() {
//         console.log('不说');

//     }
// }

// let b: B = new B('nv','web',18)
// console.log(b.sex);
// console.log(b.name);
// b.sayHello()

//只读修饰符 readonly
class Man {
    public readonly sex: string = '男'
}
let man: Man = new Man()
// man.sex = '女' //错