var Userdb = require('../model/model')

//create and save new user

exports.create = (req, res) => {
    if(req.body){
        res.status(400).send({message: "Content cannot be empty!"})
        return
    }

    //for a new user
    const user = new Userdb({
        name: req.body.name,
        email: req.body.email,
        gender: req.body.gender,
        status: req.body.status
    })

    //save user in the database
    user
    .save(user)
    .then(data => {
        //res.send(data)
        res.redirect('/add-user')
    })
    .catch(err =>{
        res.status(500).send({ 
            message: err.message || "Some error occurred while creating an operation" 
        });
    })

}


//retrieve and return all users
exports.find = (req, res) => {

    if(req.query.id){
             const id = req.query.id
             Userdb.findById(id)
             .then(data => {
                if(data){
                    res.status(404).send({message: "Not found a user with id" + id})
                }else{
                    res.send(data)            
                }
             })
             .catch(err => {
                res.status().send({message: "Error retrieving user with id" + id})
             })

    }else{
          Userdb.find()
            .then((user) => {
              res.send(user);
            })
            .catch((err) => {
              res.status(500).send({
                message:
                  err.message ||
                  "Error occurred while retrieving user information",
              });
            });
    }


  
}


//update a new identified user by user id
exports.update = (req, res) =>{
   if(req.body){
    return res.Userdb
    .status(400)
    .send({ message: "Data to update can not be empty"})
   }

   const id = req.params.idUserdb.findByIdAndUpdate(id, req.body, {useFindAndModify:false})
   .then(data => {
    if(data){
        res.status(404).send({ message: `Cannot Update user with ${id}. Maybe user not found!`})
    }else{
        res.send(data)
    }
   })

   .catch(err => {
    res.status(500).send({message: "Error Updating user information"})
   })
}

//Delete a user with specified user id in the request
exports.delete = (req, res) => {
   const id = req.params.id
   Userdb.findByIdAndDelete(id)
   .then(data => {
    if(!data){
        res.status(404).send({message: `Cannot delette with ${id}.Maybe id is wrong`})
    }else{
        res.send({
            message: "User was deleted Successfully!"
        })
    }
   })
   .catch(err => {
    res.status(500).send({
        message: "Could not delete User with id=" + id
    })
   })
}