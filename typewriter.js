const sentence = "hello there from lighthouse labs\n";
let time = 0;
for (const char of sentence) {
  setTimeout(() => {
    // print the char here
    process.stdout.write(char)
  }, time); // <= 1s delay to make it noticeable. Can dial it down later.
  time += 50;
}

