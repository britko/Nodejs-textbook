import crypto from 'crypto';

const algoruthm: string = 'aes-256-cbc'
const key: string = 'abcdefghijklmnopqrstuvwxyz123456'
const iv: string = '1234567890123456'
const cipher = crypto.createCipheriv(algoruthm, key, iv)
let result: string = cipher.update('암호화할 문장', 'utf8', 'base64')
result += cipher.final('base64')
console.log('암호화:', result)

const decipher = crypto.createDecipheriv(algoruthm, key, iv)
let result2: string = decipher.update(result, 'base64', 'utf8')
result2 += decipher.final('utf8')
console.log("복호화:", result2)