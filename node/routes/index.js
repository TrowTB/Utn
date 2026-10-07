var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/perifericos', function(req, res){
  res.send("Perifericos");
})
router.get('/placas-de-video', function(req,res){
  res.send("Placas de video");
})
router.get('/procesadores', function(req, res){
  res.send("Procesadores");
})
router.get('/memorias-ram', function(req, res){
  res.send("Memorias ram");
})
router.get('/almacenamiento', function(req, res){
  res.send("Almacenamiento");
})
router.get('/fuentes', function(req, res){
  res.send("Fuentes de poder");
})



module.exports = router;
