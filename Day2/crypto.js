var crypto= require('crypto'); // 암호화 모듈.

var shasum = crypto.createHash('sha256');
shasum.update('crypto_hash');
var output = shasum.digest('hex');

console.log(output);
