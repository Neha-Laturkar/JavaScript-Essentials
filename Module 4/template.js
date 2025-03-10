class User {
    constructor(name, age, email){
        this.name = name;
        this.age = age;
        this.email = email;
    };
}

const user1 = new User ("Rushabh", 20, "rushabh@gmail.com");

const newHTML = `
<h1>Hello ${user1.name}</h1>
<h1>Your age is : ${user1.age}</h1>
<h1>Your email is : ${user1.email}</h1>
`;
document.body.innerHTML = newHTML;

const user2 = new User ("Melis", 22, "melis@gmail.com");

const newHTML2 = `
<h1>Hello ${user2.name}</h1>
<h1>Your age is : ${user2.age}</h1>
<h1> Your email is : ${user2.email}</h1>
`;

document.body.innerHTML = newHTML2;
document.body.innerHTML = newHTML;

const newUser2 = new User ("Ram" ,40, "ramsutar@gmail.com");

const newHTML3 = `
<h1>Hello ${newUser2.name}</h1>
<h1>Your age is  ${newUser2.age}</h1>
<h1>Email address is ${newUser2.email}</h1>
`;

document.body.innerHTML = newHTML3;