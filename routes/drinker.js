const express = require('express');
const router = express.Router();
const queries = require('../queries');

router.get('/drinker', (request, response, next) => {
    queries.list('drinker').then(drinker => {
    response.json({drinker});
})
.catch(next);
});

router.get("/drinker/:id", (request, response, next) => {
    queries.read("drinker", request.params.id).then(drinker => {
        drinker
            ? response.json({drinker})
            : response.status(404).json({message: 'Not found'})
    }).catch(next);
  });
  
  router.post("/drinker", (request, response, next) => {
    queries.create("drinker", request.body).then(drinker => {
        response.status(201).json({drinker: drinker});
    }).catch(next);
  });
  
  router.put("/drinker/:id", (request, response, next) => {
    queries.update("drinker", request.params.id, request.body).then(drinker => {
        response.json({drinker: drinker[0]});
    }).catch(next);
  });

module.exports = router;

