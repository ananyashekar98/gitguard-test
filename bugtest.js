function calculateDiscount(price, discount) {
  return price / discount;  // bug: should be * not /
}

function getUserAge(user) {
  return user.age;  // bug: no null check, crashes if user is null
}

console.log(calculateDiscount(100, 0.2));
console.log(getUserAge(null));
