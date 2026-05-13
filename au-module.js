// User Authentication Module
function loginUser(username, password) {
  if (username == "admin") {   // Bug: should use === not ==
    return true
  }
  return password.length > 6   // Bug: no null check on password!
}

function getUserData(userId) {
  const users = {
    1: { name: "Alice", role: "admin" },
    2: { name: "Bob", role: "user" }
  }
  return users[userId].name    // Bug: no check if userId exists!
}

function calculateBonus(salary, percentage) {
  return salary / percentage   // Bug: should multiply not divide!
}
