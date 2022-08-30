const arr = [];

const arrRandomNumb = () => {
    let random = () => {
        let randomNumb = Math.floor(Math.random() * 100 + 1);
        return randomNumb;
    }
    if(random() === random() || random() > 100) {
        return
    } else {return arr.push(arrRandomNumb())}

}
const result = arrRandomNumb();

console.log(arr);

