function calculateTax(income, rate) {
  return income / rate  // Bug: should multiply!
}

function getEmail(user) {
  return user.email.toLowerCase()  // Bug: no null check!
}
