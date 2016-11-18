/**
 * Created by Jason on 2016/11/14.
 */
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var multer = require('multer');
var port = process.env.PORT || 3000;     //process全局变量，
var app = express();

app.set('views','./views/pages');
app.set('view engine','jade');
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(multer()); // for parsing multipart/form-data
app.use(express.static(path.join(__dirname,'bower_components')))
app.listen(port);

console.log('huihui started on port' + port);

app.get('/',function(req,res){
    res.render('index',{
        title:'huihui首页',
        movies:[
        {
            title:'机械战警',
            _id:1,
            poster:"http://r3.ykimg.com/05160000530EEB63675839160D0B79D5"
        },
        {
            title:'机械战警',
            _id:2,
            poster:"http://r3.ykimg.com/05160000530EEB63675839160D0B79D5"
        },
        {
             title:'机械战警',
              _id:3,
              poster:"http://r3.ykimg.com/05160000530EEB63675839160D0B79D5"
        },
        {
             title:'机械战警',
             _id:4,
             poster:"http://r3.ykimg.com/05160000530EEB63675839160D0B79D5"
        },
        {
             title:'机械战警',
             _id:5,
             poster:"http://r3.ykimg.com/05160000530EEB63675839160D0B79D5"
        },
        {
             title:'机械战警',
              _id:6,
             poster:"http://r3.ykimg.com/05160000530EEB63675839160D0B79D5"
        }
        ]
    })
})

app.get('/movie/:id',function(req,res){
    res.render('detail',{
        title:'huihui详情页',
        movie:{
            doctor:'何塞.帕迪利亚',
            country:'美国',
            title:'机械战警',
            year:2014,
            poster:'http"//r3.ykimg.com/05160000530EEB63675839160D0B79D5',
            language:'英语',
            flash:'http"//player.youku.com/palyer.php/sid/XNjA1Njc0NTUy/v.swf',
            summary:'课程简介： 本课程紧接第一期课程带您完完整整的用nodejs升级一个从前端到后端的项目，深入了解前后端知识，启发你从前端的视角切换到全端的视角，从而更好的窥探前端的职业发展，为进一步自学打下快速打下基础。'
        }
    })
})

app.get('/admin/movie',function(req,res){
    res.render('admin',{
        title:'huihui后台录入页',
        movie:{
            title:'',
            doctor:'',
            country:'',
            year:'',
            poster:'',
            flash:'',
            summary:'',
            language:''
        }
    })
})

app.get('/admin/list',function(req,res){
    res.render('list',{
        title:'huihui列表页',
        movies:[{
            title:'机械战警',
            _id:1,
            doctor:'何塞‘博蒂利亚',
            country:'美国',
            year:2014,
            language:'英语',
            flash:'http"//player.youku.com/palyer.php/sid/XNjA1Njc0NTUy/v.swf',
            summary:'课程简介： 本课程紧接第一期课程带您完完整整的用nodejs升级一个从前端到后端的项目，深入了解前后端知识，启发你从前端的视角切换到全端的视角，从而更好的窥探前端的职业发展，为进一步自学打下快速打下基础。'
        }]

    })
})