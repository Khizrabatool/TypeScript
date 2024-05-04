// Write a CSV File
var createCsvWriter = require('csv-writer').createObjectCsvWriter;
var csvWriter = createCsvWriter({
    path: 'out.csv',
    header: [
        { id: 'name', title: 'Name' },
        { id: 'surname', title: 'Surname' },
        { id: 'age', title: 'Age' },
        { id: 'gender', title: 'Gender' },
    ]
});
var data = [
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
    .then(function () { return console.log('The CSV file written successfully'); });
