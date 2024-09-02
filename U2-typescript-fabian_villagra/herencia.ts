import Car from "./propiedadPrivada";

class ElectricCar extends Car {
    public batteryLife: number;

    public charge(): void {
        console.log('El coche se está cargando');
    };
};