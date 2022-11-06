//filter 함수 공부
const numbers = [1,3,4,6,6];

numbers.filter((number, index, source) => {
    // number: 요소값
    // index: source에서 요소의 index
    // source: 순회하는 대상
    console.log(number);
    console.log(index);
    console.log(source);
    return console.log(number > 3);
});
