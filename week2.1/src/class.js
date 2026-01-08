// creating a class
var rectangle = /** @class */ (function () {
    function rectangle(width, height, color) {
        this.width = width;
        this.height = height;
        this.color = color;
    }
    rectangle.prototype.area = function () {
        return this.width * this.height;
    };
    rectangle.prototype.paint = function () {
        return "painting with color ".concat(this.color);
    };
    return rectangle;
}());
var ract = new rectangle(4, 5, 'red');
console.log(ract);
