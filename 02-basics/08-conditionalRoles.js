// create an app with foll. roles:
// admin - full access
// subadmin - create/delete course
// testprep - create/delete tests
// user - consume content

var user = "testprep"

switch (user) {
    case "admin":
        console.log("You get full access");
        break;
    case "subadmin":
        console.log("You can create delete courses");
        break;
    case "testprep":
        console.log("You can create delete tests");
        break;
    case "user":
        console.log("You can consume content");
        break;
    default:
        console.log("trial user");
        break;
}