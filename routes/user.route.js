var express = require('express');

var controller = require('../controllers/user.controller');



var router = express.Router();

router.get('/', controller.index);

router.get('/search', controller.search);

router.get('/create', controller.create);
router.post('/create',controller.postCreate);

router.get('/xem/:idread', controller.read);

router.get('/sua/:idcansua', controller.sua);
router.post('/sua/:idcansua', controller.postsua);
router.post('/xoa/:idcanxoa', controller.xoa);




module.exports = router;
