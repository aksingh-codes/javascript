const states = new Array("Uttar Pradesh", 1947, "Rajasthan", "Assam", "jklsdf")

// FOR OF LOOP
// for (const state of states) {
//     console.log(state);
// }



const symbols = {
    yt: "Youtube",
    ig: "Instagram",
    fb: "Facebook",
    lco: "Learncodeonline.in"
}


// FOR IN LOOP
// for (const key in states) {
//     if (Object.hasOwnProperty.call(states, key)) {
//         const element = states[key];
//         console.log(element);
//     }
// }


for (const key in symbols) {
    console.log(`Key is ${key} and value is ${symbols[key]}`);
}