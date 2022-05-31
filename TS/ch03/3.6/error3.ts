import fs from 'fs'

setInterval(() => {
    fs.unlink('./abcdefg.js', () => {})
}, 1000)