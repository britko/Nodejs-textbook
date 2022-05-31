import fs from 'fs'

const readStream = fs.createReadStream(__dirname + '/readme3.txt', { highWaterMark: 16 })
const data: any = []

readStream.on('data', (chunk) => {
    data.push(chunk)
    console.log('data :', chunk, chunk.length)
})

readStream.on('end', () => {
    console.log('end :', Buffer.concat(data).toString())
})

readStream.on('error', (err) => {
    console.log('erroe :', err)
})