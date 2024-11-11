abstract class Person {
    constructor(public fullname: string, public age: number) {
        this.fullname = fullname;
        this.age = age;
    }

    getInfos(): string {
        return `
            Full Name : ${this.fullname} \n
            Age : ${this.age} \n
        `;
    }

    abstract setSecretKey(key: string): void;
}


class Student extends Person {
    constructor(public specialization: string, public secretKey: string, public fullname: string, public age: number) {
        super(fullname, age);
        this.specialization = specialization;
        this.secretKey = secretKey;
    }

    setSecretKey(key: string): void {
        this.secretKey = key;
    }
}