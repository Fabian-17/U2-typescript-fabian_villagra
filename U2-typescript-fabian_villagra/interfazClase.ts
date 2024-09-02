interface Shape {
    area(): number;
};

class Circle implements Shape {

    private radio: number;
    constructor (radio: number) {
        this.radio = radio;
    };

    area(): number {
        return Math.PI * Math.pow(this.radio, 2);
    };

};