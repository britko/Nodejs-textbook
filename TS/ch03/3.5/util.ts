import util from 'util'
import crypto from 'crypto'

const dontUseMe = util.deprecate((x: number, y: number) => {
    console.log(x + y)
}, 'dontUseMe 함수는 deprecated되었으니 더 이상 사용하지 마세요!')
dontUseMe(1, 2)

const randomBytePromise = util.promisify(crypto.randomBytes)

randomBytePromise(64)
    .then((buf) => {
        console.log(buf.toString('base64'))
    })
    .catch((error) => {
        console.error(error)
    })