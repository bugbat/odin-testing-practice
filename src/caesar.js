export function caesarCipher(str, shift) {
  let result = ""
  let newChar = ""
  for (const char of str) {
    if (!isAlpha(char)) {
      newChar = char;
    }
    else if(isLowercase(char)) {
      // transform for lowercase
      const ascii = char.charCodeAt(0);
      let newAscii = ascii + shift;
      if (newAscii > "z".charCodeAt(0)) {
        newAscii = "a".charCodeAt(0) + (newAscii % "z".charCodeAt(0)) - 1
      }
      newChar = String.fromCharCode(newAscii);
    }
    else { 
      // transform for uppercase
      const ascii = char.charCodeAt(0);
      let newAscii = ascii + shift;
      if (newAscii > "Z".charCodeAt(0)) {
        newAscii = "A".charCodeAt(0) + (newAscii % "Z".charCodeAt(0)) - 1
      }
      newChar = String.fromCharCode(newAscii);
    }
    result += newChar;
  }
  return result;
}

function isLowercase(s) {
  return s === s.toLowerCase();
}

function isAlpha(s) {
  let alphaRegex = /^[a-zA-Z]+$/;
  return alphaRegex.test(s);
}