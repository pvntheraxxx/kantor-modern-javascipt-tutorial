let height = null;
let width = null;

// без скобок
let area = height ?? 100 * width ?? 50;
console.log(area);

// ... сработает вот так (совсем не как нам нужно)
let area2 = height ?? (100 * width) ?? 50;
console.log(area2);