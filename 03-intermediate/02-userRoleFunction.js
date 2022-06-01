/*
Define a funcion that can answer the role of a user
A user can have following roles.

admin - full access
subadmin - create/delete course
testprep - create/delete tests
user - consume content
other - trial user

Input: getUserRoles(name, role)
*/

// function getUserRole(name, role) {
//     switch (role) {
//         case "admin":
//             return `${name} is ${role} get full access.`
//         case "subadmin":
//             return `${name} is ${role} can create delete courses.`
//         case "testprep":
//             return `${name} is ${role} can create delete tests.`
//         case "user":
//             return `${name} is ${role} can consume content.`
//         default:
//             return `${name} is a trial user can only comment.`
//     }
// }

//fucntional programmning

const getUserRole = function (name, role) {
    switch (role) {
        case "admin":
            return `${name} is ${role} get full access.`
        case "subadmin":
            return `${name} is ${role} can create delete courses.`
        case "testprep":
            return `${name} is ${role} can create delete tests.`
        case "user":
            return `${name} is ${role} can consume content.`
        default:
            return `${name} is a trial user can only comment.`
    }
}

const getRole = getUserRole("ashwani", "admin");

console.log(getRole);