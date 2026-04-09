function divide(a, b) {
  return a / b;  // Bug: no division by zero check!
}

function getUser(user) {
  return user.name;  // Bug: no null check!
}

console.log(divide(20, 0));
// testing groq review
// testing llama model
