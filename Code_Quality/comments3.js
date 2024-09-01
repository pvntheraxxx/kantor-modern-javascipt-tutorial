/* Рецепт: создавайте функции */

// здесь мы добавляем виски 
for (let i = 0; i < 10; i++) {
    let drop = getWhiskey(); 
    smell(drop);
    add(drop,glass);
}

// здесь мы добавляем сок
for (let t = 0; t < 3; t++) {
    let tomato = getTomato();
    examine(tomato);
    let juice = press(tomato);
    add(juice, glass);
}

// ...