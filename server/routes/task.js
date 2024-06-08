const express=require("express")
const router=express.Router()
const {
    getAlltask,
    getTask,
    addTask,
    editTask,
    deleteTask,
  } = require("../controller/task");


router.route('/tasks').get(getAlltask).post(addTask)
router.route('/tasks/:id').get(getTask).patch(editTask).delete(deleteTask)

module.exports=router