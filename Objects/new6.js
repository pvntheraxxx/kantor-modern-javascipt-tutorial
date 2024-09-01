/* Также мы можем сделать, чтобы вызовы с new и без
него делали одно и то же: */

function User(name) {
    if (!new.target) { // в случае, если вы вызвали меня без оператора new
        return new User(name); // ... я добавлю new за вас
    };
    this.name = name;
};

let john = User("John"); // переадресовывает вызов на new User
console.log(john.name); // John