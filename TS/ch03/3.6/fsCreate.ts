import { promises } from 'fs'
import { constants } from 'fs'

promises.access(__dirname + '/folder', constants.F_OK | constants.W_OK | constants.R_OK)
    .then(() => {
        return Promise.reject('이미 폴더 있음')
    })
    .catch((err) => {
        if (err.code === 'ENOENT') {
            console.log('폴더 없음')
            return promises.mkdir(__dirname + '/folder')
        }
        return Promise.reject(err)
    })
    .then(() => {
        console.log('폴더 만들기 성공')
        return promises.open(__dirname + '/folder/file.js', 'w')
    })
    .then((fd) => {
        console.log('빈 파일 만들기 성공', fd)
        return promises.rename(__dirname + '/folder/file.js', __dirname + '/folder/newfile.js')
    })
    .then(() => {
        console.log('이름 바꾸기 성공')
    })
    .catch((err) => {
        console.error(err)
    })