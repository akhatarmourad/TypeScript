/* Objects in TypeScript */

// * Declare and create an object
const DataWarehouse = {
    fact_tables: 1,
    dim_tables: 3,
    isUpdated: true,
    schema: "Snowflake",
}

// * Create a functio that takes an object as a parameter
function printDataWarehouse({facts, dims, schema = "Star"}: {facts: number, dims: number, schema?: string}): string {
    return `
        Fact Tables : ${facts} \n
        Dimension Tables : ${dims} \n
        Schema : ${schema}
    `;
}

// * Create a function that returns an object
function createDataWarehouse():{schema: string, dims: number, facts: number} {
    return {
        schema: "Snowflake",
        dims: 3,
        facts: 1,
    };
}

// * Pass a param as an Object variable, Weird Behavior
const TestDW = { facts: 1, dims: 5, schema: "Vault" };

function createDW({facts, dims}: {facts: number, dims: number}) {
    return `
        Facts : ${facts} \n
        Dimensions: ${dims} \n
    `;
}


createDW(TestDW); // ! Normally the parameter is not compatile with the passed argument