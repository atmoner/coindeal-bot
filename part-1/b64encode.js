const str = '{publicKey}:{privateKey}'; // Edit this part
const buff = Buffer.from(str, 'utf-8');
const base64 = buff.toString('base64');

console.log(base64);
