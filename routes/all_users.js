const express = require('express');
const router = express.Router();
const queries = require('../queries');

router.get('/all_users', (request, response, next) => {
    queries.list('all_users').then(all_users => {
    response.json({all_users});
})
.catch(next)
});

router.get("/all_users/:id", (request, response, next) => {
    queries.read("all_users", request.params.id).then(all_users => {
        all_users
            ? response.json({all_users})
            : response.status(404).json({message: 'Not found'})
    }).catch(next);
  });
  
  router.post("/all_users", (request, response, next) => {
    queries.create("all_users", request.body).then(all_users => {
        response.status(201).json({all_users: all_users});
    }).catch(next);
  });
  
  router.delete("/all_users/:id", (request, response, next) => {
    queries.delete("all_users", request.params.id).then(() => {
        response.status(204).json({deleted: true});
    }).catch(next);
  });
  
  router.put("/all_users/:id", (request, response, next) => {
    queries.update("all_users", request.params.id, request.body).then(all_users => {
        response.json({all_users: all_users[0]});
    }).catch(next);
  });



module.exports = router;





// router.post('/all_users', (req, res, next) => {
//     queries.create("all_users", request.body.id)
//     .insert({
//         //left side is database columns, right side is 'names' in ejs file 
//         mover_username: req.body.mover_username,
//         moving_username: req.body.moving_username,
//         truck_picture: req.body.truck_picture,
//         mover_location: req.body.mover_location,
//         moving_location: req.body.moving_location,
//         mover_date: req.body.mover_date,
//         mover_time: req.body.mover_time,
//         moving_date: req.body.moving_date,
//         mover_price: req.body.mover_price,
//         moving_time: req.body.moving_time,
//         moving_objects: req.body.moving_objects,
//         mover_truck_description: req.body.mover_truck_description,
//     }, '*')
  
//     .then((all_users) => {
//         res.send();
//     })
  
//     .catch((err) => {
//         next(err);
//     });
//   });