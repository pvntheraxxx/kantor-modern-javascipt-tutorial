function hello(name) {
    let phrase = `Hello, ${name}!`;
  
    say(phrase);
  }
  
  debugger; // <-- тут отладчик остановится
  
  function say(phrase) {
    console.log(`** ${phrase} **`);
  }
  