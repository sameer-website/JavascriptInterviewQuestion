const word = "helloe";
let result = "";

for (let i = 0; i < word.length; i++) {
  let isDuplicate = false;

  for (let j = 0; j < i; j++) {
    if (word[i] === word[j]) {
      isDuplicate = true;
      break;
    }
  }

  if (!isDuplicate) {
    result += word[i];
  }
}

console.log(result);
