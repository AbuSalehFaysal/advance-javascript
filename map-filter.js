const array = [1,2,3,4,5];
const arraySquare = [];

for (let i = 0; i < array.length; i++) {
    const element = array[i];
    const elementSquare = element*element;
    arraySquare.push(elementSquare);
}

// console.log(arraySquare);


const element = [1,2,3,4,5];
element.map(function(element, index, array){
    console.log(element,index,array);
});

const bigger = element.filter( x => x < 3);
console.log(bigger);

const oneGreat = element.filter( x => x > 4);
console.log(oneGreat);