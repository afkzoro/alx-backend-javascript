const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('Welcome to Holberton School, what is your name?\n', (name) => {
  if (name === 'exit') {
    process.stdout.write('This important software is now closing\n');
    rl.close();
  } else {
    process.stdout.write(`Your name is: ${name}\n`);
    rl.close();
  }
});
