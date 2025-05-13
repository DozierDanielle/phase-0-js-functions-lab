




// This is required for the test to function properly  
module.exports = { calculateTax, convertToUpperCase, findMaximum, isPalindrome, calculateDiscountedPrice };
// Function 1: Calculate Tax
function calculateTax(amount) {
    return amount * 0.10;  // Calculate 10% tax
  }
  
  // Function 2: Convert to Uppercase
  function convertToUpperCase(text) {
    return text.toUpperCase();  // Converts text to uppercase
  }
  
  // Function 3: Find Maximum
  function findMaximum(num1, num2) {
    return num1 > num2 ? num1 : num2;  // Returns the larger of num1 and num2
  }
  
  // Function 4: Check if Palindrome
  function isPalindrome(word) {
    const lowerCaseWord = word.toLowerCase();  // Convert to lowercase
    const reversedWord = lowerCaseWord.split('').reverse().join('');  // Reverse the word
    return lowerCaseWord === reversedWord;  // Check if the word is the same forwards and backwards
  }
  
  // Function 5: Calculate Discounted Price
  function calculateDiscountedPrice(originalPrice, discountPercentage) {
    const discountAmount = (originalPrice * discountPercentage) / 100;  // Calculate discount
    return originalPrice - discountAmount;  // Subtract the discount from the original price
  }
  
  // Test cases
  console.log(calculateTax(100));  // Should print 10
  console.log(convertToUpperCase("hello"));  // Should print "HELLO"
  console.log(findMaximum(5, 10));  // Should print 10
  console.log(isPalindrome("madam"));  // Should print true
  console.log(calculateDiscountedPrice(100, 20));  // Should print 80
  
  // This is required for the test to function properly  
  module.exports = { calculateTax, convertToUpperCase, findMaximum, isPalindrome, calculateDiscountedPrice };
  