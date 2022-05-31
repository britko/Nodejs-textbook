import dep2 from './dep2'

console.log('require dep2', dep2);

const dep1 = () => {
    console.log('dep2', dep2)
}

export default dep1