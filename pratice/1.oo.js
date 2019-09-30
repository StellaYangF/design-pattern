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
var Human = /** @class */ (function () {
    function Human(name, age, money) {
        this.name = name;
        this.age = age;
        this.money = money;
    }
    return Human;
}());
var Man = /** @class */ (function (_super) {
    __extends(Man, _super);
    function Man(name, age, money, num) {
        var _this = _super.call(this, name, age, money) || this;
        _this.num = num;
        return _this;
    }
    Man.prototype.getName = function () {
        return this.name;
    };
    Man.prototype.getAge = function () {
        return this.age;
    };
    Man.prototype.getMoney = function () {
        return this.money;
    };
    return Man;
}(Human));
var m = new Man("tom", 18, 100, 10);
m.name;
m.age;
m.getAge();
m.getMoney();
