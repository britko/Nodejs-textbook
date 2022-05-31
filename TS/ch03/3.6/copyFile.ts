import { promises } from 'fs'

promises.copyFile(__dirname + '/readme4.txt', __dirname + '/writeme4.txt')
    .then(() => {
        console.log('복사 완료')
    })
    .catch((error) => {
        console.error(error)
    })