"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var D = /** @class */ (function () {
    function D(name, age, skill) {
        this.name = name;
        this.age = age;
        this.skill = skill;
    }
    D.prototype.showD = function () {
        console.log('hello world');
    };
    return D;
}());
// let d: D = new D('web', 18, 'web')
// d.show()
var E = /** @class */ (function (_super) {
    __extends(E, _super);
    function E() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.appearance = '帅';
        return _this;
    }
    E.prototype.showD = function () {
        _super.prototype.showD.call(this);
        console.log('建立平台');
    };
    E.prototype.showE = function () {
        console.log('~~~~~~~');
    };
    return E;
}(D));
var newE = new E('js', 20, '技术');
newE.showD();
newE.showE();
