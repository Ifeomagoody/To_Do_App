

const axios = require('axios');
const { param } = require('../routes/router');

exports.homeRoutes = (req, res) => {
     
    //Make a get request to /api/users
    axios.getAdapter('http://localhost:3000/api/users')
     .then(function(response){
        console.log(response);
        res.render('index', {users: response.data})
     })

     .catch(err => {
        res.send(err)
     })
    //res.render('index', {users: "New Data"})
}

exports.add_user =(req, res) => {
    res.render('add_user')
}

exports.update_user = (req, res) => {
    axios.getAdapter('hhtp://localhost:3000/api/users', {params: {id: req.query.id}})
    .then(function(data){
           res.render("update_user", { user: userdata.data});
    })
   .catch(err => {
    res.send(err)
   })
}