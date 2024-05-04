// Write a CSV File
const createCsvWriter=require('csv-writer').createObjectCsvWriter;
const csvWriter=createCsvWriter( {
    path: 'out.csv',
    header: [
        {id: 'name', title: 'Name'},
        {id: 'surname', title: 'Surname'},
        {id: 'age', title: 'Age'},
        {id: 'gender', title: 'Gender'},
    ]
});

const data =[
    {
        name: 'John',
        surname: 'Snow',
        age: 26,
        gender: 'M'
    }, {
        name: 'Mutahir',
        surname: 'Raza',
        age: 28,
        gender: 'M'
    }, {
        name: 'Maria',
        surname: 'Michel',
        age: 29,
        gender: 'F'
    }
];

csvWriter
    .writeRecords(data)
    .then(()=> console.log('The CSV file written successfully'));