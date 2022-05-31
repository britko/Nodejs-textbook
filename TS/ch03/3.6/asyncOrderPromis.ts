import { promises } from 'fs'

console.log('시작')
promises.readFile(__dirname + '/readme2.txt')
    .then((data: Buffer) => {
        console.log('1번', data.toString())
        return promises.readFile(__dirname + '/readme2.txt')
    })
    .then((data: Buffer) => {
        console.log('2번', data.toString())
        return promises.readFile(__dirname + '/readme2.txt')
    })
    .then((data: Buffer) => {
        console.log('3번', data.toString())
        console.log('끝')
    })
    .catch((err: Error) => {
        console.error(err)
    })