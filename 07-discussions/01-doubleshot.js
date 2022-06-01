const google = "google";
const fb = null;

if (google) {
  console.log("I execute - BLOCK1");
}

//  fb is a falsy value, not 100% false
// to make it 100% false we use doubleshots
if (!!fb) {
  console.log("I execute - BLOCK2");
}
