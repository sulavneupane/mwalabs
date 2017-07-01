var express = require('express');
var fetch = require('node-fetch');
var Rx = require('@reactivex/rxjs');
var router = express.Router();

/* GET users listing with node-fetch using Promises. */
router.get('/', function (req, res, next) {

    fetchAndUpdate(req, res);

    // fetch('http://jsonplaceholder.typicode.com/users/')
    //     .then(function (result) {
    //         return result.json();
    //     }).then(function (json) {
    //     res.render('users', {title: "User Management System", usersListPromises: json});
    // }).catch(function (error) {
    //     console.log(error);
    // });

    //res.send('respond with a resource');
});

let data = {
    title: "User Management System"
};

const fetchDataUsingPromise = new Promise(function (resolve, reject) {
    fetch('http://jsonplaceholder.typicode.com/users/')
        .then(response => resolve(response.json()));
});

const fetchDataUsingObservables = new Promise(function (resolve, reject) {
    const dataObservable = new Rx.Subject();
    dataObservable.subscribe(value => {
        console.log(value);
        data.usersListObservables = value;
        resolve();
    });

    fetch('http://jsonplaceholder.typicode.com/users/')
        .then(response => dataObservable.next(response.json()));
});

async function fetchAndUpdate(req, res) {
    try {
        data.usersListPromises = await fetchDataUsingPromise;
        await fetchDataUsingObservables;
        data.usersListAsyncAwait = await fetchDataUsingPromise;

        //console.log(data);

        res.render('users', data);

    } catch (error) {
        data.usersListPromises = error;
        data.usersListObservables = error;
        res.render('users', data);

    }
}


module.exports = router;
