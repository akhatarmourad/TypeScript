class Teacher {
    private _id: string;
    private salary: number;

    constructor(id: string, salary: number) {
        this._id = id;
        this.salary = salary;
    }

    // * Getters
    get getId(): string {
        return this._id;
    }

    get getSlary(): number {
        return this.salary;
    }

    // * Setters
    set setSalary(salary: number) {
        this.salary = salary;
    }
}