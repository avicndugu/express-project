var express = require('express');
var router = express.Router();


// client.connect(err => {
//   const collection = client.db("sample_training").collection("grades");
//   // perform actions on the collection object
//   console.log(collection)
//   client.close();
// })

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('form', { title: 'New Form' });
});


router.use(express.urlencoded({
  extended: true
}))

router.post('/', function(req, res, next) {
  const username = req.body.name;
  console.log(username);
  res.render('formresponse', { title: 'New Form', message: 'Form Data Sent Successfully'  });
  res.end()
})


module.exports = router;
