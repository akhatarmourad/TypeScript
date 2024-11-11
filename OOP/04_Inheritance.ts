class Vehicle {
    private _id: string;
    private brand: string;
    private model: string;

    constructor(id: string, brand: string, model: string) {
        this._id = id;
        this.brand = brand;
        this.model = model;
    }

    get id(): string {
        return this._id;
    }

    set setBrand(value: string) {
        this.brand = value;
    }
}

class Car extends Vehicle {
    private color: string;
    protected fuel: number;
    private isAvailable: boolean;

    constructor(id: string, brand: string, model: string, color: string, fuel: number, isAvailable: boolean) {
        super(id, brand, model);
        this.color = color;
        this.fuel = fuel;
        this.isAvailable = isAvailable;
    }

    get getColor(): string {
        return this.color;
    }

    set setFuel(value: number) {
        this.fuel = value;
    }

    get getIsAvailable(): boolean {
        return this.isAvailable;
    }
}