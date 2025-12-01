const usernames = ["alice_01", "Bob99", "charlie_dev", "DANA", "eve-test"];

let transofrm = (arr) => {
  return arr.map((e) => ({
    original: e,
    lower: `${e.toLowerCase()}`,
    length: `${e.length}`,
    hasNumber: `${/\d/.test(e)}`,
  }));
}; // /\d/

console.log(transofrm(usernames));
