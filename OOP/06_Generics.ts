// * Generic types with variables
const scores: Array<number> = [];
const subjects: Array<string> = [];

// * Generic types with functions
function getResult<T>(id: T): T {
    return id;
}

function getLength<T>(scores: T[]): T {
    return scores[scores.length - 1];
}

// * Arrow functions
const getLen = <T>(scores: T[]): T => scores[scores.length - 1];

// * Generic Types with interfaces & constraints
interface Database {
    connection: string;
    username: string;
    password: string;
}


function getConnection<T, U extends Database>(t: T, db: U): object {
    return {};
}

interface Cloud {
    name: string,
    provider: string,
    certificates: Array<string>
}

class AWS<T> {
    public services: T[] = [];
}