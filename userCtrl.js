const JSONarray = require('./userData.json');


module.exports = {
    getAllUsers: (req, res) => {
        // if (req.query !== -1)  {
        //     res.status(200).send(JSONarray)
        //  }

         if (req.query.age) {
         console.log(+req.query.age)
        res.status(200).send()

        } 
        // else if (req.query.lastname) {
        //  console.log(req.query.lastname)
        //     res.status(200).send(JSONarray)

        // } 
        // else if (req.query.email) {
        //     console.log(req.query.email)
        //     res.status(200).send(JSONarray)

        // } 

        else {
            res.status(500).send(console.log('These are not the droids you are looking for.'))
        }
    },
    // getUserById: (req, res, next) => {
    //     if(req.params.userId) {
    //        let user = data.filter( (id, i) => data[i].id )
    //         res.status(200).send(user)
    //     } else {
    //         res.status(500).send(console.log('these are not the droids you are looking for.'))
    //     }
    // }
}