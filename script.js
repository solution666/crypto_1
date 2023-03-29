const crypto = require('crypto');
const fs = require('fs');

function hashPassword(password) {
  const hashedPassword = crypto.createHash('sha256').update(password).digest('hex');
  fs.writeFileSync('password.txt', hashedPassword);
}

function comparePassword(inputPassword) {
  const hashedPassword = fs.readFileSync('password.txt', 'utf8');
  const inputHashedPassword = crypto.createHash('sha256').update(inputPassword).digest('hex');
  return inputHashedPassword === hashedPassword;
}

if (process.argv[2] === 'hash') {
    const password = process.argv[3];
    hashPassword(password);
    } else if (process.argv[2] === 'compare') {
    const inputPassword = process.argv[3];
    const isMatch = comparePassword(inputPassword);
    console.log(`Password match: ${isMatch}`);
}

hashPassword('sadmood');

console.log(comparePassword('sadmood'));