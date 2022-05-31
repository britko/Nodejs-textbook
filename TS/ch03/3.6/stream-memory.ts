import { promises } from 'fs'

console.log('before: ', process.memoryUsage().rss)

const readStream = promises.createReadStream(__dirname + '/big.txt')
const writeStream = promises.createWriteStream(__dirname + '/big3.txt')
readStream.pipe(writeStream)
readStream.on('end', () => {
    console.log('stream: ', process.memoryUsage().rss)
})