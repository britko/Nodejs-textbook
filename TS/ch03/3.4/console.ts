const str: string = 'abc'
const num: number = 1
const bool: boolean = true
const o: object = {
    outside: {
        inside: {
            key: 'value',
        },
    },
}

console.time('전체 시간')
console.log('평범한 로그입니다 쉼표로 구분해 여러 값을 찍을 수 있습니다')
console.log(str, num, bool)
console.error('에러 메시지는 console.error에 담아주세요')

console.table([{ name: '제로', birth: 1994}, { name: 'hero', birth: 1988}])

console.dir(o, { colors: false, depth: 2})
console.dir(o, { colors: true, depth: 1})

console.time('시간 측정')
for (let i = 0; i < 100000; i++) {}
console.timeEnd('시간 측정')

// 강제로 에러를 발생 시킴
const b = () => {
    console.trace('에러 위치 추적')
}
const a = () => {
    b()
}

a()
console.timeEnd('전체 시간')