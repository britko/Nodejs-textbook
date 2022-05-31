import dep1 from './dep1'

console.log('require dep1', dep1);

const dep2 = () => {
    console.log('dep1', dep1)
}

export default dep1