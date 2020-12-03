function Fruit(name, color, taste) {
    this.name = name;
    this.color = color;
    this.taste = taste;
    this.exotic = false;
}

Fruit.prototype.peelable = function() {
    // FIXME add apples, lemons and grafruits
    return this.name = "orange";
}

