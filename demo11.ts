//类是对象，具体事物的一个抽象，对象时类的具体表现
class A {
    name: string
    age: number
    constructor(name: string, age: number) {
        this.name = name
        this.age = age
    }
    show() {
        console.log('hello');
    }
}

let aa: A = new A('web', 18)
console.log(aa);
aa.show()