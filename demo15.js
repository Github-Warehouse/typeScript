"use strict";
var spaceA;
(function (spaceA) {
    var A = /** @class */ (function () {
        function A() {
            this.name = '帥';
        }
        A.prototype.talk = function () {
            console.log('帥');
        };
        return A;
    }());
    spaceA.A = A;
})(spaceA || (spaceA = {}));
var spaceB;
(function (spaceB) {
    var B = /** @class */ (function () {
        function B() {
            this.name = '丑';
        }
        B.prototype.talk = function () {
            console.log('丑');
        };
        return B;
    }());
    spaceB.B = B;
})(spaceB || (spaceB = {}));
var spacea = new spaceA.A();
var spaceb = new spaceB.B();
spacea.talk();
spaceb.talk();
