let str ="Hello javaScript"
console.log(str);

console.log(str.length);

console.log(str[0]);

console.log(str[str.length -1]);  // accessing last char

console.log(str.toUpperCase());
console.log(str.toLowerCase());

console.log(str.slice(0,5));
console.log(str.substring(6,10));

let words =str.split(" ");
console.log(words);
console.log("Join with - :", words.join("-"));

console.log(str.replace("JavaScript", "JS"));

let s2 = "   coding is fun   ";
console.log(s2.trim());

console.log("Repeat 3 times:", "Hi ".repeat(3));

//count vowels 
function countVowels(s) {
    let count = 0;
    let vowels ="aeiouAEIOU";
    for(let i = 0; i< s.length; i++) {
        if(vowels.includes(s[i]))
            count++;
    }
    return count;
}
console.log(countVowels("Hitesh"));



// Check if string contains substring
console.log("Contains JS:", str.includes("JavaScript"));
console.log("Contains Python:", str.includes("Python"));


// Capitalize first letter of each word
function capitalizeWords(sentence) {
  let words = sentence.split(" ");
  for (let i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].slice(1);
  }
  return words.join(" ");
}
console.log("Capitalize:", capitalizeWords("javascript string practice file"));

// Count frequency of each character
function charFrequency(s) {
  let freq = {};
  for (let i = 0; i < s.length; i++) {
    let ch = s[i];
    freq[ch] = (freq[ch] || 0) + 1;
  }
  return freq;
}
console.log("Char frequency:", charFrequency("programming"));


// remove spaces
 function removeSpaces(s) {
    let out = "";
    for (let i = 0; i < s.length; i++) {
    if (s[i] !== ' ') out += s[i]; 
}
return out;
}

// string only contain letter
function isNumericString(s) {
   if (s.length === 0) return false; 
    for (let i = 0; i < s.length; i++) {
    let ch = s[i];
    if (ch < '0' || ch > '9') return false; 
    }
    return true; 
}