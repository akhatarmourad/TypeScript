/* Create functions */

function add(a: number, b: number): number {
    return a + b;
}

function greetings(name: string = "X", text: string = "Hello"): string {
    return `${text}, ${name}`;
}

function student({name, field, experience = 0}: {name: string, field: string, experience?: number}): string {
    return `
        Name : ${name.toUpperCase()} \n
        Field : ${field} \n
        Experience : ${experience} years
    `;
}

function consoleMessage(msg: string): void {
    console.log(`The message is : ${msg}`);
}

function handleError(error: string): never {
    throw new Error(error);
}