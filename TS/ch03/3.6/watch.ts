import fs from 'fs'

fs.watch(__dirname + '/target.txt', (eventType, filename) => {
    console.log(eventType, filename)
})