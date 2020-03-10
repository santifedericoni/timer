const stdin = process.stdin;
// don't worry about these next two lines of setup work.
stdin.setRawMode(true);
stdin.setEncoding('utf8');

console.log('type a number to beep')

stdin.on('data', (key) => {
  process.stdout.write('.');
  if (key === 'b') {
    process.stdout.write('\x07');
  }
  if (!isNaN(Number(key))){
    const numKey = Number(key);
    if (key > 0 && key < 10) {
      console.log(`setting timer for ${numKey} seconds...`);
      setTimeout(() => {
        process.stdout.write('\x07');
      }, numKey *1000)
      console.log('type a number to beep')
    }
  }
  if (key === '\u0003') {
    console.log('bye bye')
    process.exit();
  }
});
