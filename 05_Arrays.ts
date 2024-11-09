const subjects: string[] = ["GraphQL", "TypeScript", "MongoDB", "Storage", "Networking"];

type Course = {
    title: string;
    duration: number;
    subjects: string[];
}

const courses: Course[] = [];

courses.push({
    title: "Data Warehousing",
    duration: 3.3,
    subjects: ["Data Warehousing Process", "Fact & Dimension Tables", "Data Modeling", "ETL", "Data Pipeline"]
});