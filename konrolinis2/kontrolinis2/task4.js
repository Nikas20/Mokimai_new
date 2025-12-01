const text = "Hello123! Welcome to JS 2025.";

let countCharacterTypes = (str) => {
  let letters = 0; // /[a-zA-Z]+/g
  let digits = 0; // /[1-9]+/g
  let spaces = 0; // /\s/g
  let symbols = 0;

  let text = str.split("");
  // text.length = 29

  for (let i = 0; i < text.length; i++) {
    if (/[a-zA-Z]+/g.test(text[i])) {
      letters += 1;
    } else if (/[1-9]+/g.test(text[i])) {
      digits += 1;
    } else if (/\s/g.test(text[i])) {
      spaces += 1;
    }

    symbols = text.length - letters - digits - spaces;
  }
  return {
    letters: `${letters}`,
    digits: `${digits}`,
    spaces: `${spaces}`,
    symbols: `${symbols}`,
  };
};

console.log(countCharacterTypes(text));
