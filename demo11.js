"use strict";
//类是对象，具体事物的一个抽象，对象时类的具体表现
var A = /** @class */ (function () {
    function A(name, age) {
        this.name = name;
        this.age = age;
    }
    A.prototype.show = function () {
        console.log('hello');
    };
    return A;
}());
var aa = new A('web', 18);
console.log(aa);
aa.show();
