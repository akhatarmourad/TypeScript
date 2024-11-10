/* Interfaces in TypeScript */
interface Person {
    username: string,
    readonly email: string,
    password: string | number,
    speciality?: string,
    getCertificate: () => string | null,
    getMark(id: string): number,
    setMark(id: string, mark: number): void,
}

const student: Person = {
    username: "Akhatar Mourad",
    email: "akhatar.mourad@gmail.com",
    password : "2024@DEVDES",
    getCertificate: () => "Certificate Data Analytics",
    getMark: (id: "SJ37342") => 14.56,
    setMark: (id: "SJ37342", mark: 16.78) => { console.log(mark); },
}

/* Inheritance */
interface Infos {
    readonly ID: string | number,
    address: string,
    citizenship: string,
}

interface Man extends Infos, Person {
    wife: string,
    job: string,
    salary: number,
}