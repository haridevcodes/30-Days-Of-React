let text =
  "I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.";
text = text.replace(/[.,]/g, '');
let words = text.split(" ");
console.log(text);
console.log(words);
console.log(words.length);