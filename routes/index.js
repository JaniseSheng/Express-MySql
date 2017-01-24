const express = require('express');
const router = express.Router();
const multer = require('multer');
const config = require('../config');
const path = require('path');
const imageTranslate = require('../lib/imageTranslate.js');
//关联主程序
const goodlist = require('../good/goodlist.js');
const imageslist = require('../imagesManage/imageslist.js');


//图片上传配置
const upload = multer({
    dest: path.join(config.rootPath, 'public/', 'uploads/'),
    fileFilter: (req, file, cb) => {
        const mimetype = file.mimetype;
        if (mimetype.indexOf('image') > -1) {
            cb(null, true);
        } else {
            cb(null, false);
        }
    }
});

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('home',{name: 'janisesheng'});
});

//查
router.get('/goodAll', function (req, res, next) {
    goodlist.goodAll(req, res, next);
});
//查Id
router.get('/goodById', function (req, res, next) {
    goodlist.goodById(req, res, next);
});
//增加
router.post('/goodAdd', function (req, res, next) {
    goodlist.goodAdd(req, res, next);
});
//删除
router.get('/goodDelete', function (req, res, next) {
    goodlist.goodDelete(req, res, next);
});
//修改
router.post('/goodUpdate', function (req, res, next) {
    goodlist.goodUpdate(req, res, next);
});



//图片服务
//查
router.get('/imageAll', function (req, res, next) {
    imageslist.imageAll(req, res, next);
});
//查Id
router.get('/imageById', function (req, res, next) {
    imageslist.imageById(req, res, next);
});
//增加
router.post('/imageAdd', upload.single('picture'), function (req, res, next) {
    imageslist.imageAdd(req, res, next);
});
//删除
router.get('/imageDelete', function (req, res, next) {
    imageslist.imageDeleteById(req, res, next);
});
//删除全部
router.get('/imageDeleteAll', function (req, res, next) {
    imageslist.imageDeleteAll(req, res, next);
});
//修改
router.post('/imageUpdate', function (req, res, next) {
    imageslist.imageUpdate(req, res, next);
});1

module.exports = router;