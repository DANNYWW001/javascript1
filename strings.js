const firstName = "john";
const lastName = "Doe";

console.log(firstName.length);
console.log(lastName.length);

const myPassword = "dannywwave";
console.log(myPassword);
console.log(myPassword.length);

const fullName = firstName + " " + lastName;
console.log(fullName);
console.log(fullName.length);

const email = "jjdoe@google.co.uk";
console.log(email);
console.log(email.toUpperCase());
console.log(email.toLowerCase());

console.log(email.charAt(1));
console.log(email.indexOf("j"));
console.log(email.lastIndexOf("o"));

console.log(email.startsWith("jj"));
console.log(email.endsWith(".uk"));
console.log(email.includes("Doe".toLowerCase));
console.log(email.includes("doe"));
console.log(email.toUpperCase().includes("CO"));

const username = "    ade001    ";
console.log(username.trim());
console.log(username.trim());
console.log(username.trimStart());

const myName = "jane doe";
console.log(myName.replace("e", "*"));
console.log(myName.replaceAll("e", "*"));

console.log(myName.slice(0, 3));
console.log(myName.substring(0, 3));

console.log(myName.substr(0, 5));

const accountNumber = "124567890";
console.log(accountNumber.replace(accountNumber.substr(2, 6), "******"));
console.log(accountNumber.replace(accountNumber.slice(2, 7), "******"));

const userName2 = "johnpaul";
console.log("welcome" + " " + userName2.toUpperCase());

const author = "Jax Draxx";
const book = "The Ghost";

const sentence = author + " wrote the book " + book.toLowerCase();
console.log(sentence);

const sentence2 = `${author} wrote the book ${book.toLowerCase()}`;
console.log(sentence2);

const person = "Adam Sandler";
const movie = "Romance Scam";

const sentence3 = `${person.toUpperCase()} featured in the movie ${movie}`;
console.log(sentence3);

const fName = `${firstName} ${lastName}`

const example = `ade said and i quote 'i am good'`;
console.log(example);

const country = "Portugal";
console.log(country.length);
console.log(country.toUpperCase());
console.log(country.substr(0, 5));
console.log(country.startsWith("e"));
console.log(country.includes("h"));

const sentence4 = `I live in ${country.toUpperCase()}`
console.log(sentence4);





