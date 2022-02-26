const { readFile, writeFile } = require('fs')

console.log('start')
readFile('./content/first.txt', 'utf-8', (err, result) => {
    if (err) {
        console.log(err)
        return
    }
    console.log(result)
    const first = result
    readFile('./content/second.txt', 'utf-8', (err, result) => {
        if (err) {
            console.log(err)
            return
        }
        console.log(result)
        const second = result
        writeFile(
            './content/result-async.txt',
            `Here is async result: ${first}, ${second}`,
            (err, result) => {
                if (err) {
                    console.log(err)
                    return
                }
                console.log(result)
            }
        )
    })
})
console.log('end')

