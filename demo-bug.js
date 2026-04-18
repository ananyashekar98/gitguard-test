function calculateSalary(hours, rate) {
  return hours / rate  // Bug: should multiply not divide!
}

function getUserEmail(user) {
  return user.email.toLowerCase()  // Bug: no null check!
}
