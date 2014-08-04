MeanContact
===========

Simple contact manager application using MEAN stack

What is MEAN stack?

MEAN is a full-stack JavaScript solution that helps you build fast, robust and maintainable production web applications using MongoDB, Express, AngularJS, and Node.js.


## Getting Started

To get you started you can simply clone the MeanContact repository and install the dependencies:

### Prerequisites

You need git to clone the angular-seed repository. You can get it from
[http://git-scm.com/](http://git-scm.com/).

You must have node.js and its package manager (npm) installed. You can get them from [http://nodejs.org/](http://nodejs.org/).

You must have MongoDB installed. You can get them from [http://www.mongodb.org/](http://www.mongodb.org/).

### Clone MeanContact

Clone the MeanContact repository using [git][git]:

```
git clone https://github.com/jiajun86/MeanContact.git
cd MeanContact
```

### Install Dependencies

There are two kinds of dependencies in this project: tools and angular framework code. The tools help us manage and test the application.

* We get the tools we depend upon via `npm`, the [node package manager][npm].
* We get the angular code via `bower`, a [client-side code package manager][bower].

You need to run `npm install` and `bower install` as follow:

```
npm install && bower install
```

Behind the scenes this will also call `bower install`.  You should find that you have two new
folders in your project.

* `node_modules` - contains the npm packages for the tools we need
* `bower_modules` - contains the angular framework files

### Run the Application

We have preconfigured the project with a simple development web server.  The simplest way to start
this server is:

```
npm start
```

Now browse to the app at `http://localhost:3000`.
