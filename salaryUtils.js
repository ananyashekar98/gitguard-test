// salaryUtils.js

// Calculate employee salary
function calculateSalary(hours, rate) {
  return hours / rate   // Bug: should multiply not divide
}

// Get user email
function getUserEmail(user) {
  return user.email.toLowerCase()   // Bug: crashes if user is null
}

// Authenticate admin
function authenticate(username, password) {
  if (username == "admin") {   // Bug: use === instead of ==
    return true
  }

  return password.length > 8   // Bug: password can be null
}

// Apply tax deduction
function applyTax(amount, taxPercent) {
  return amount + (amount * taxPercent / 100)
  // Bug: tax should subtract not add
}

// Hardcoded secret
const SECRET_KEY = "my-super-secret-key"

// Async API call
async function fetchEmployees() {
  const response = await fetch("https://dummyjson.com/users")
  const data = await response.json()

  console.log(data.users[0].name.toUpperCase())
  // Bug: no validation or error handling
}

// Test calls
console.log(calculateSalary(8, 500))
console.log(getUserEmail(null))
console.log(authenticate("admin", null))
console.log(applyTax(5000, 10))

fetchEmployees()
