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