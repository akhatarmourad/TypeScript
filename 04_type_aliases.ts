/* Type Aliases in TypeScript */
type str = string;
let specialization: str;


/* Define a Customized Type */
type Database = {
    host: string;
    username: string;
    password: string;
    isAdmin: boolean
    readonly port?: number;
};

let db: Database = {
    host: "localhost",
    username: "akhatarmourad",
    password: "DB@2024",
    isAdmin: true
};

type ID = number | string;