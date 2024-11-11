/* Object oriented Programming */

class User {
    // Attributes
    fullname: string;
    email: string;
    readonly school: string = "ENSAM";

    // Constructor
    constructor(fullname: string, email: string) {
        this.fullname = fullname;
        this.email = email;
    }
}

const user = new User("Akhatar Mourad", "akhatar.mourad@gmail.com");