import { promises } from 'fs'

promises.readdir(__dirname + '/folder')
    .then((dir) => {
        console.log('폴더 내용 확인', dir)
        return promises.unlink(__dirname + '/folder/newfile.js')
    })
    .then(() => {
        console.log('파일 삭제 성공')
        return promises.rmdir(__dirname + '/folder')
    })
    .then(() => {
        console.log('폴더 삭제 성공')
    })
    .catch((err) => {
        console.error(err)
    })