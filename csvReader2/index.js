"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var csv = require('csv-parser');
var fs = require('fs');
fs.createReadStream('data.csv')
    .pipe(csv())
    .on('data', function (row) {
    console.log(row);
})
    .on('end', function () {
    console.log('CSV file successfully processed');
});
