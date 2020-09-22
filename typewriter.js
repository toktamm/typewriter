const typewriter = function(sentence) {
  let time = 0;
  sentence += "\n";
  for (const char of sentence) {
    setTimeout(() => process.stdout.write(char), time);
    time += 50;
  }
}

typewriter("hello there from lighthouse labs");




//old code
// const sentence = "hello there from lighthouse labs\n";
// let time = 0;
// for (const char of sentence) {
//   setTimeout(() => {
//     // print the char here
//     process.stdout.write(char)
//   }, time); // <= 1s delay to make it noticeable. Can dial it down later.
//   time += 50;
// }

