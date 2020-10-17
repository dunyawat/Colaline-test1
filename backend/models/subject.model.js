const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const subjectSchema = new Schema({
    subjectName:{type:String,required:true,},
    score:{type:Number,required:true},
    credit:{type:Number,required:true}
}, {
    timestamps:true,
});

const Subject = mongoose.model('Subject', subjectSchema);

module.exports = Subject;