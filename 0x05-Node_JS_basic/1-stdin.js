const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('Welcome to Holberton School, what is your name?\n', (name) => {
  if (name.trim().toLowerCase() === 'exit') {
    rl.close();
    process.stdout.write('This important software is now closing\n');
    process.exit();
  } else {
    process.stdout.write(`Your name is: ${name}\n`);
    rl.close();
  }
});

// Handle input piped through the command line
if (!process.stdin.isTTY) {
  process.stdin.setEncoding('utf8');
  process.stdin.on('data', (data) => {
    const name = data.trim();
    process.stdout.write(`Your name is: ${name}\n`);
    process.stdout.write('This important software is now closing\n');
    process.exit();
  });
}
