const age = parseInt(prompt("How old are you?"));

console.log(isNaN(age));

if (isNaN(age) || age < 0) {
  // condition == true
  console.log("Please write a real positive number");
} else if (age < 18) {
  // condition == false
  console.log("You are too young.");
} else if (age >= 18 && age <= 50) {
  // && == and, || == or
  console.log("You can drink.");
} else if (age > 50 && age <= 80) {
  console.log("You should exercise.");
} else if (age > 80) {
  console.log("You can do whatever you want.");
}
