let user = {
    name: "Sasha",
    surname: "Pushkin",
};
console.log(user);

user.name = "Henry";
console.log(user);

delete user.name; 
console.log(user);