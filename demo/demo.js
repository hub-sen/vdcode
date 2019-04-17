const array = [1, 2, 3, 4, 4, 5];

const uniqueArray = [...new Set(array)];

console.log(uniqueArray);

uniqueArray.forEach(element => {
    console.log(element);
})

let x = 101;
let temp;
temp = x > 100 ? '> 100' : '<= 100';

console.log(temp);

temp = x > 100 ? (x > 200 ? '> 200' : '100 < x <= 200') : '<= 100';

console.log(temp);

x = +"20";

x = ~~"201"


x = 2 ** 3;

console.log(x);

console.log(array.slice(1,3));

console.log(array.slice(-4,-2));
