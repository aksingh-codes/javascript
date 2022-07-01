const user = {
    firstName: "Ashwani Kumar",
    lastName: "Singh",
    role: "admin",
    loginCount: 32,
    facebookSignedIn: true,
    courseList: [],
    // function in object
    buyCourse: function (courseName) {
        this.courseList.push(courseName);
    },
    getCourseCount: function () {
        return `${this.firstName} is enrolled in total of ${this.courseList.length} courses`;
    },
    getInfo: function () {
        return `
            ----------------- Info ---------------------
            Name: ${this.firstName + " " + this.lastName}
            Role: ${this.role}
            Login count: ${this.loginCount}
            Facebook Signed: ${this.facebookSignedIn}
            Total Courses taken: ${this.courseList.length}
        `;
    }
};

console.log(user);
console.log(user.getCourseCount())
user.buyCourse("The React Bootcamp");
user.buyCourse("Javascript Course");
console.log(user.getCourseCount())

console.log(user);

console.log(user.getInfo())