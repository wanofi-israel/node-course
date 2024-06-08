const mongoose=require('mongoose')

const taskSchema=new mongoose.Schema({
    task:{
        type:String,
        required:[true,"this field is required"],
        trim:true,
        maxlength:20
    },
    completed:{
        type:Boolean,
        default:false
    }
})
module.exports=mongoose.model("task",taskSchema)