import { promises } from 'fs'

promises.readFile(__dirname + '/readme.txt')
    .then((data) => {
        console.log(data)
        console.log(data.toString())
    })
    .catch((err) => {
        console.error(err)
    })