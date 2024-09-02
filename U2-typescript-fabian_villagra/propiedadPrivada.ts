export default class Car {

        private make: string;

        constructor(make: string){
            this.make = make;
        };
    
        private drive(): void {
            console.log(`Driving a ${this.make}`);
        };

        public getMake(): string {
            return this.make;
        }
    };

const miAuto = new Car('Toyota');

console.log(miAuto.getMake());