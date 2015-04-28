# Articles for MailOnline test

## Assumptions
* [nodejs](https://nodejs.org/), [npm](https://www.npmjs.com/) and [gulpjs](http://gulpjs.com/) already installed
* [mongodb](https://www.mongodb.org/) running on the same machine


## Installation
```
$ git clone git@github.com:trepafi/articles.git articles
$ cd articles/api
$ npm install
$ gulp
```

## Usage
* [List](http://localhost:3100/articles) all articles
```
$ curl http://localhost:3100/articles
```
* Create an article
```
$ curl -v -H "Content-Type: application/json" -X PUT -d '{"headline":"whoa", "full":"ops", "channel":"mychannel", "status":"true"}' http://localhost:3100/articles
```
* Show a specific article
```
$ curl http://localhost:3100/articles/:id
```
* Retrieve all articles for a specific channel
```
$ curl http://localhost:3100/channels/:channel/articles
```
* Updating an article
```
$ curl -v -H "Content-Type: application/json" -X POST -d '{"headline":"change","full":"change","channel":"sport","status":"held"}' http://localhost:3100/articles/:id
```
* Removing and article
```
$ curl -i -H "Accept: application/json" -X DELETE http://localhost:3100/articles/:id
```

## Performance considerations
* **Concurrent Writting**
In the current example Mongoose follows *last change will win*, so the last change will be reflected.
MongoDB uses the [WiredTiger](http://www.wiredtiger.com/) approach to optimize the concurrency control.
A proper solution would be creating a queue

* **Caching querys**
There are many ways to cache queries.
For the current test the easiest solution would be to use a npm package like [`mongooe-cache`](https://www.npmjs.com/package/mongoose-cache).
Using `redis` would be another good solution
