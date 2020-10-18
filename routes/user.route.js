var express = require('express');

var controller = require('../controllers/user.controller');



var router = express.Router();

router.get('/', controller.index);
router.get('/daxoa', controller.daxoa);
router.get('/search', controller.search);

router.get('/searchday', controller.searchday);


router.get('/create', controller.create);
router.post('/create',controller.postCreate);

router.get('/xem/:idread', controller.read);

router.get('/sua/:idcansua', controller.sua);
router.post('/sua/:idcansua', controller.postsua);
router.get('/xoa/:idcanxoa', controller.xoa);




module.exports = router;
