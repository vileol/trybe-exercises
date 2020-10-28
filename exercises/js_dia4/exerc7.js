
let string = 'arauhuehfui';
let end = 'fui';

function verifyEnd(str,end) {
    let count = end.split("").length;
    let stringEnd = end.split("").join("");
    let stringList = string.split("").slice(-count).join("");
    (stringEnd  === stringList)? console.log('True'): console.log('False');
    console.log(stringEnd);
    console.log(stringList);
}
verifyEnd(string,end);