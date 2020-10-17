var User = require('../models/user.model');


//  Tìm tất cả
module.exports.index = async function(req, res) {

  var users = await User.find({del:null});
  // console.log(users);
  res.render('users/index', {
    users: users
  });
};

module.exports.search =async function(req, res) {
  var q = req.query.q;
  
  var matchedUsers =await User.find({
    name:{ $regex: q},
    del:null
  });
  
  res.render('users/index', {
    users: matchedUsers
    
  });
};

// lay id can xem
module.exports.read =async function(req, res, next) {
  var id3 = req.params.idread;

  var ReadUser1 = await User.findOne({_id:id3});
    res.render('users/chitiet',{
      user:ReadUser1
    });
  // console.log(user)
};

// lay id can sua
module.exports.sua =async function(req, res, next) {
  var id2 = req.params.idcansua;

  var ReadUser = await User.findOne({_id:id2});
    res.render('users/update',{
      ReadUser:ReadUser
    });
  // console.log(ReadUser);
};


//post id can sua
module.exports.postsua =function(req, res) {
  var id2 = req.params.idcansua;
  User.findById(id2,function(err,data){
    if(err) return handleError(err);
      data.name = req.body.name;
      data.loai = req.body.loai;
      data.soluong = req.body.soluong;
      data.gia = req.body.gia;
      data.giao = req.body.giao;
      data.save();
    res.redirect('/users');
    // console.log(data);
})};

// xoa id
module.exports.xoa =function(req, res, next) {
  var id = req.params.idcanxoa;
  User.findById(id,function(err,data){
  if(err) return handleError(err);
  data.del = "x";
  data.save();
  res.redirect('/users');
  console.log(data);
})};
// xoa id
// module.exports.xoa =function(req, res, next) {
//   var id = req.params.idcanxoa;
//   User.findByIdAndRemove(id).exec();
  
//   res.redirect('/users');
// };

// tao du lieu
module.exports.create = function(req, res) {
  res.render('/users/index');
  
};
module.exports.postCreate =async function(req, res) {
    req.body.month = new Date().toLocaleString();
    req.body.del = null;
    
  var users = await User.insertMany(req.body);

  res.redirect('/users');
};
