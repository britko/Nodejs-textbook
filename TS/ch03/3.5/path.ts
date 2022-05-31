import path from 'path'

const string = __filename

console.log('path.sep:', path.sep)
console.log('path.delimiter:', path.delimiter)
console.log('-------------------------------')
console.log('path.dirname():', path.dirname(string))
console.log('path.extname():', path.extname(string))
console.log('path.basename():', path.basename(string))
console.log('path.basename - extname:', path.basename(string, path.extname(string)))
console.log('------------------------------')
console.log('path.parse()', path.parse(string))
console.log('path.format():', path.format({
    dir: '/Users/ko-yeongguk',
    name: 'path',
    ext: '.js',
}))
console.log('path.normalize():', path.normalize('///Users//path.js'))
console.log('------------------------------')
console.log('path.isAbsolute(C:\\)', path.isAbsolute('C:\\'))
console.log('path.isAsolute(./home)', path.isAbsolute('./home'))
console.log('------------------------------')
console.log('path.reative():', path.relative('/Users/path', '/Users'))
console.log('path.join():', path.join(__dirname, '..', '..', '/Users', '.', '/node'))
console.log('path.resolve():', path.resolve(__dirname, '..', 'users', '.', '/node'))