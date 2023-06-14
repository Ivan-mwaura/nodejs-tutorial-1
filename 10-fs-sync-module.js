//file system modules

//synchronus
console.log('starting task')
const {readFileSync, writeFileSync} = require('fs')

const first = readFileSync('./content/first.txt','utf-8')
const second = readFileSync('./content/second.txt','utf-8')

console.log(first, second)
console.log('done with task')

writeFileSync('./content/result-sync.txt',
 `Here is the result : ${first}, ${second} `,
 {flag:'a'})
 console.log('starting next task')