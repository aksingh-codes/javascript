// THIS BINDING
// or
// Borrowing methods

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
  },
};

const bl = {
  firstName: "Brock",
  lastName: "Lesnar",
  role: "sub-admin",
  courseList: ["calesthenics"],
};

console.log(user.getInfo());

const blInfo = user.getInfo.bind(bl); // bind will point the this to bl object
// bind gives a reference back

console.log(user.getInfo());

console.log(blInfo());

console.log(user.getInfo.call(bl));
// call doesnt give back reference it calls fun directly
