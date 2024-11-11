class Course {
    title: string;
    public duration: number;
    private isCompleted: boolean;
    protected secretKey: string;
}

/* a brief way to create attributes & constructor */
class Project {
    constructor(public title: string, private budget: number) {
        this.title = title;
        this.budget = budget;
    }
}