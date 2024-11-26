const persons =[
    {fn: 'John', ln: 'Doe'},
    {fn: 'Jane', ln: 'Doe'},
    {fn: 'Jim', ln: 'Doe'},
    {fn: 'Jill', ln: 'Doe'},
]



persons.map((person) => {
    console.log(person.fn + ' ' + person.ln);
})

const ages = [32, 33, 16, 40];
const result = ages.filter(checkAdult);

function checkAdult(age) {
  return age >= 18;
}

console.log(result);