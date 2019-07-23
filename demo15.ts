namespace spaceA {
    export class A {
        public name: string = '帥'
        talk() {
            console.log('帥');

        }
    }
}
namespace spaceB {
    export class B {
        public name: string = '丑'
        talk() {
            console.log('丑');

        }
    }
}
let spacea: spaceA.A = new spaceA.A()
let spaceb: spaceB.B = new spaceB.B()
spacea.talk()
spaceb.talk()