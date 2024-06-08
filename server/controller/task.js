const Task=require("../model/Task.js")

const getAlltask= async (req,res)=>{
    try {
        const tasks= await Task.find({})
        res.status(200).json(tasks)
    } catch (error) {
        res.status(404).json({msg:error})
    }
}

const getTask= async (req,res)=>{
   try {
     const {id:taskId}=req.params
     const task=await Task.findOne({_id:taskId})
     if(!task){
        return res.status(404).json({msg:"no Item with"})
     }
     res.status(200).json(task)
   } catch (error) {
    res.status(404).json({msg:error})
   }
}
const addTask= async (req,res)=>{
   try {
     const newTask=await Task.create(req.body)
     
     res.status(201).json(req.body)
   } catch (error) {
    res.status(500).json({msg:error})
   }
}
const editTask= async (req,res)=>{
    try {
        const {id:TaskID}=req.params
        const task=await Task.findOneAndUpdate({_id:TaskID},req.body,{
            new:true,
            runValidators:true
        })
        if(!task){
            return res.status(404).json({msg:"no Item with"})
         } 
        res.status(200).json(task)
    } catch (error) {
    res.status(500).json({msg:error})
    }
}

const deleteTask= async (req,res)=>{
    try {
        const {id:TaskID}=req.params
        const task=await Task.findOneAndDelete({_id:TaskID})
        if(!task){
            return res.status(404).json({msg:"no Item with"})
         }
        res.status(200).json(task)
    } catch (error) {
        res.status(500).json({msg:error})
    }
}

module.exports={
    getAlltask,
    getTask,
    addTask,
    editTask,
    deleteTask
}