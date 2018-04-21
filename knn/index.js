const KNN = require('ml-knn');
const csv = require('csvtojson');
const prompt = require('prompt');
const path = require('path');

let knn;

const csvFilePath = path.join(__dirname, 'iris.csv');
const names = [
  'sepalLength',
  'sepalWidth',
  'petalLength',
  'petalWidth',
  'type',
];

let seperationSize;

let data = [];
let x = [];
let y = [];
let typesArr = [];

let trainingSetX = [];
let trainingSetY = [];
let testSetX = [];
let testSetY = [];

csv({ noheader: true, headers: names })
  .fromFile(csvFilePath)
  .on('json', jsonObj => data.push(jsonObj))
  .on('done', () => {
    seperationSize = 0.7 * data.length;
    data = shuffleArray(data);
    dressData();
  });

/**
 * https://stackoverflow.com/a/12646864
 * Randomize array element order in-place.
 * Using Durstenfeld shuffle algorithm.
 */
function shuffleArray(array) {
  for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
  }
  return array;
}

function dressData() {

  let types = new Set();

  data.forEach(row => types.add(row.type));

  typesArr = [...types];

  data.forEach((row) => {
    let rowArray = Object.keys(row).map(key => parseFloat(row[key])).slice(0, 4);
    let typeNumber = typesArr.indexOf(row.type);
    x.push(rowArray);
    y.push(typeNumber);
  });

  trainingSetX = x.slice(0, seperationSize);
  trainingSetY = y.slice(0, seperationSize);
  testSetX = x.slice(seperationSize);
  testSetY = y.slice(seperationSize);

  train();  
}

function train() {
  knn = new KNN(trainingSetX, trainingSetY, { k: 9 });
  test();
}

function test() {
  const result = knn.predict(testSetX);
  const testSetLength = testSetX.length;
  const predictionError = error(result, testSetY);
  log(`Test set Size = ${testSetLength} and number of Misclassifications = ${predictionError}`);
  predict();
}

function error(predicted, expected) {
  let misclassifications = 0;
  for (let index = 0; index < predicted.length; index += 1) {
    if (predicted[index] !== expected[index]) {
      misclassifications += 1;
    }
  }
  return misclassifications;
}

function log(text) {
  console.log(text); // eslint-disable-line
}

function predict() {
  let temp = [];
  prompt.start();

  prompt.get(['Sepal Length', 'Sepal Width', 'Petal Length', 'Petal Width'], function(err, result) {
    if (!err) {
      for (let key in result) {
        temp.push(parseFloat(result[key]));
      }
      log(`With ${temp} -- type = ${typesArr[knn.predict(temp)]}`);
    }
  });
}
