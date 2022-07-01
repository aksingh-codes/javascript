class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }
  // private property by adding # on front
  #courseList = [];
  getInfo() {
    return {
      name: this.name,
      email: this.email,
    };
  }
  // setter
  enrollCourse(course) {
    this.#courseList.push(course);
  }
  // getter
  getCourseList() {
    return this.#courseList;
  }
  // cannot inherit this
  static login() {
    return "You are logged in";
  }

  getFood() {
    return "Apple";
  }
}

module.exports = User;

const rock = new User("rock", "rock@dj.com");
console.log(rock.getInfo());
rock.enrollCourse("Calesthenics Course");
console.log(rock.getCourseList());
console.log(rock.courseList);

// Inheritance

class SubAdmin extends User {
  constructor(name, email) {
    super(name, email);
  }
  getAdminInfo() {
    return "I am sub-admin";
  }
  getFood() {
    return "Fish";
  }
}

const tom = new SubAdmin("tom", "tom@cn.com");
console.log(tom.getAdminInfo());
console.log(tom.getInfo());
// console.log(tom.login());
console.log(tom.getFood());
