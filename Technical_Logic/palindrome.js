let palindrome = "madam";
let reverse = "";

for (let i = palindrome.length - 1; i >= 0; i--) {
  reverse += palindrome.charAt(i);
}

if (palindrome == reverse) {
  console.log("It is a palindrome");
} else {
  console.log("Not a palindrome");
}
