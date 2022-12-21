function checkSign(num) {
    if (num > 0) {
      console.log("The number is positive.");
    } else if (num < 0) {
      console.log("The number is negative.");
    } else {
      console.log("The number is zero.");
    }
  }
  
  checkSign(5);  // Output: "The number is positive."
  checkSign(-3); // Output: "The number is negative."
  checkSign(0);  // Output: "The number is zero."
  