let user = {
    name: "Sasha",
    age: 27,
}


let key = "likes birds";

// то же самое, что и user["likes birds"] = true;
user[key] = true;
console.log(key);