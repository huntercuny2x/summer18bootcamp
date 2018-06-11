## Using Express, create routes to do the following:
* Accept apple or ale returning "Apple or Ale?"
* Accept the word 'whoa' with an arbitrary number of os and as, returning' "I know, right?!"
* Take a first name and last name as parameters, returning a greeting for that user.
* Take a word as a parameter and returning the word reversed.


## Create an Express app that uses this source data to serve up a view on the front end. Try all three of the views engines that we discussed: EJS, Handlebars and Pug.

* Make sure to create a project directory, install Express and your view dependency.
* Create a folder inside called views and create a file to render your views here.

For example, if using EJS:
* Create a new project directory called ejs-exercise and cd into it.
* Run npm init, answering the questions
* Install and save express and ejs
* Create a views directory
* Create a view called list.ejs in views to display a modified grocery list: display each store with its respective list
*sample data*
var data = {
    groceries: [{
    store: 'Acme',
    list: [
        'strawberries',
        'blueberries',
        'yogurt'
    ]
    }, {
    store: 'Corner Market',
    list: [
        'baguette',
        'basil',
        'tomatoes'
    ]
    }]
};
