(() => {

    class Car {
        public make: string;

        constructor(make: string){
            this.make = make;
        };
    
        public drive(): void {
            console.log(`Driving a ${this.make}`);
        };
    };

    const miAuto = new Car('Toyota');

    console.log(miAuto.drive());
    
})();