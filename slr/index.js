const ml = require('ml-regression');
const csv = require('csvtojson');
const { SLR } = ml; // Simple Linear Regression
const readline = require('readline');
const path = require('path');

const csvFilePath = path.join(__dirname, 'advertising.csv');

let csvData = [];
let x = [];
let y = [];

let regressionModel;

csv()
  .fromFile(csvFilePath)
  .on('json', (jsonObj) => {
    csvData.push(jsonObj);
  })
  .on('done', () => {
    dressData();
    performRegression();
  });

function dressData() {
  csvData.forEach((row) => {
    x.push(parseFloat(row.radio));
    y.push(parseFloat(row.sales));
  });
}

function performRegression() {
  regressionModel = new SLR(x, y);
  const precision = 3;
  console.log(regressionModel.toString(precision));
  predictOutput();
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function predictOutput() {
  rl.question('Enter input x for prediction (Press CTRL+C to exit): ', (answer) => {
    console.log(`At x = ${answer}, y = ${regressionModel.predict(parseFloat(answer))}`);
    predictOutput();
  });
}
