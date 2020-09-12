const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  rl.question('Cuantas iteraciones quieres hacer?', function(iterations) {
    for (let i = 0; i < iterations; ++i) {
        console.log(i);
    }
    rl.close()
  });