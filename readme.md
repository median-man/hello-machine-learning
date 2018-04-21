# Hello Machine Learning
This repository is my first project dealing with machine learning. I'm following Abhishek Soni's [*Machine Learning with Javascript* series][hacker-noon] on Hacker Noon.

## Simple Linear Regression Model
In the field of statistics, simple linear regression (SLR) models can be used to predict the relationship between two variables where one variable depends on the other and the relationship is presumed to be linear.

In this project, the SLR method uses the [Ordinary Least Squares][ordinary-least-squares] procedure to produce the model.

According to George Seif in [his article][george-seif] on Towards Data Science, linear regression is useful as a fast model when the relationship to be modeled is simple and there is not a lot of data available. Also, Seif mentions that the model is easy to understand making it valuable for business decisions. Linear regression is not as good as other models for working with highly complex data.

### Further Reading
* [Linear Regression for Machine Learning][ml-mastery-slr]
* [Selecting the Best Machine Learning Algorithm for Your Regression Problem][george-seif]
* [Simple Linear Regression Examples][slr-examples]

## k-Nearest-Neighbors (kNN)
kNN is a supervised  learning algorithm which may be used in classification and regression problems according to Soni in [Part 2][hn-part2] of his series on [Hacker Noon][hacker-noon].


## Libraries Used
### ml-regression
[ml-regression][gh-ml-regression] exports a collection of regression algorithms. This project uses the Simple Linear Regression which points to [regression-simple-linear][gh-regression-simple-linear].

<!-- Links -->
[hacker-noon]: https://hackernoon.com/machine-learning-with-javascript-part-1-9b97f3ed4fe5
[hn-part2]: https://hackernoon.com/machine-learning-with-javascript-part-2-da994c17d483
[ordinary-least-squares]: https://en.wikipedia.org/wiki/Ordinary_least_squares
[ml-mastery-slr]: https://machinelearningmastery.com/linear-regression-for-machine-learning/
[gh-ml-regression]: https://github.com/mljs/regression
[gh-regression-simple-linear]: https://github.com/mljs/regression-simple-linear
[george-seif]: https://towardsdatascience.com/selecting-the-best-machine-learning-algorithm-for-your-regression-problem-20c330bad4ef
[slr-examples]: http://intellspot.com/linear-regression-examples/
