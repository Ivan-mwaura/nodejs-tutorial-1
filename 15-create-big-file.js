const {writeFileSync} = require('fs')

for (let i = 0; i <= 1000; i ++){
    writeFileSync( './content/big.txt',`number : ${i}\n`,{flag:'a'}) 
} 
