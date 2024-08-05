class Shape {
    constructor(color) {
        this.color = color;
    }

    setColor(color) {
        this.color = color;
    }

    textProperties(){
        return {};
    }
}

class Circle extends Shape {
    render() {
        return `<circle cx="125" cy="125" r="125" fill="${this.color}" />`;
    }
    textProperties(){
        return {
            y: "60%",
            fontSize: "80"
        };
    }
}

class Triangle extends Shape {
    render() {
        return `<polygon points="125,30 250,200 0,200" fill="${this.color}" />`;
    }
    textProperties(){
        return {
            y: "70%",
            fontSize: "50"
        };
    }
}

class Square extends Shape {
    render() {
        return `<rect width="250" height="250" fill="${this.color}" />`;
    }
    textProperties(){
        return {
            y: "60%",
            fontSize: "80"
        };
    }
}

module.exports = { Circle, Triangle, Square };
