const { readFileSync, writeFileSync } = require('fs')

// const {readFileSync} = require('fs')
// this is similar or do same task as of
// const file = require('fs')

const first = readFileSync('./content/first.txt', 'utf-8')
const second = readFileSync('./content/second.txt', 'utf-8')

console.log(first, second)

writeFileSync(
    './content/result-sync.txt',
    `Hello is the result: ${first}, ${second}`
)