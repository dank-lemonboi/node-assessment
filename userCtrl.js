const data = require('./userData.json');

module.exports = {
    getAllUsers: (req, res) => {
        // const {age, lastname, email, favorites} = req.query
        let userData = [];
        if()
        else if (req.query.age) {
            data.filter( userAge => userAge.age < +req.query.age)
        } 
        else if (req.query.lastname) {
            data.filter( userLastName => userLastName.last_name === req.query.lastname)
            userData.push(userLastName)
        } 
        else if (req.query.email) {
            data.filter( userEmail => userEmail.email === req.query.email)
            userData.push(userEmail)
        } else if (req.query.favorites) {
            data.filter(fav => fav.favorites[0])
            userData.push(fav)
        }  else {
           res.status(200).send(userData)
            }
            res.status(200).send(userData)
            res.status(500).send(console.log('These are not the droids you are looking for.'))
        }
    }
    }
    // getUserById: (req, res, next) => {
    //     if(req.params.userId) {
    //        let user = data.filter( (id, i) => data[i].id )
    //         res.status(200).send(user)
    //     } else {
    //         res.status(500).send(console.log('these are not the droids you are looking for.'))
    //     }
    // }
// }