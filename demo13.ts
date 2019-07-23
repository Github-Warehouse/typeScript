class D {
    public name: string
    public age: number
    public skill: string
    constructor(name: string, age: number, skill: string) {
        this.name = name
        this.age = age
        this.skill = skill
    }
    public showD() {
        console.log('hello world');

    }
}

// let d: D = new D('web', 18, 'web')
// d.show()

class E extends D {
    public appearance: string = '帅'
    public showD(){
        super.showD()
        console.log('建立平台');
        
    }
    public showE() {
        console.log('~~~~~~~');

    }
}

let newE = new E('js', 20, '技术')
newE.showD()
newE.showE()