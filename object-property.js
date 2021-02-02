const output = [];
const students = [
    {id: 1, name: "Abu Saleh Faysal"},
    {id: 2, name: "Shahriar Kabir"},
    {id: 3, name: "Mohammad Shuvo"}
];

// for (let i = 0; i < students.length; i++) {
//     const element = students[i].name;
//     // console.log(element);  
//     output.push(element);
//     console.log(output);
// }

const names = students.map(s => s.name);
const ids = students.map(element => element.id);
const badStudent = students.filter(element => element.id > 1);
const goodStudent = students.find(element => element.id < 2);
console.log(goodStudent);