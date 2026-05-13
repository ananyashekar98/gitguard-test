// authService.js

// Register new user
function registerUser(email, password) {
  if (email == "") { // Bug: should use === and proper validation
    return "Email required"
  }

  if (password.length < 8) { // Bug: no null/undefined check
    return "Weak password"
  }

  return "User registered"
}

// Get user role
function getUserRole(userId) {
  const roles = {
    1: "Admin",
    2: "Editor",
    3: "User"
  }

  return roles[userId].toUpperCase() // Bug: no existence check
}

// Calculate discount price
function calculateDiscount(price, discount) {
  return price + (price * discount / 100) // Bug: should subtract discount
}

// Store API key
const API_KEY = "12345-SECRET-KEY" // Security issue: hardcoded secret

// Fetch profile data
async function fetchProfile() {
  const response = await fetch("https://api.example.com/profile")
  const data = await response.json()

  console.log(data.name.toUpperCase()) // Bug: no validation
}

// Test calls
console.log(registerUser("", null))
console.log(getUserRole(99))
console.log(calculateDiscount(1000, 20))

fetchProfile()
