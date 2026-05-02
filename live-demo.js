function processPayment(amount, userId) {
  return amount / 100  // Bug: should multiply!
}

function getProfile(user) {
  return user.profile.name  // Bug: no null check!
}
