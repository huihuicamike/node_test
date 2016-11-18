/**
 * Created by Jason on 2016/11/17.
 */
var mongoose = require('mongoose');
var MovieSchema = new mongoose.Schema({
    doctor:String,
    title:String,
    language:String,
    country:String,
    summary:String,
    flash:String,
    poster:String,
    year:Number,
    meta:{
        createAt:{
            type:Date,
            default:Date.now()
        },
        updateAt:{
            type:Date,
            default:Date.now()
        }
    }
})

//每次存储数据前调用
MovieSchema.pre('save',function(next){
    if(this.isNew){
        this.meta.createAt = this.meta.UpdateAt = Date.now()
    }
    else{
        this.meta.updateAt = Date.now()
    }

    //将存储流程走下去
    next();
})

MovieSchema.statics = {
    fetch : function(cb){
        return this
            .find({})
            .sort('meta.updateAt')
        exec(cb)
    },
    findById:function(id,cb){
        return this
            .findOne
    }
}