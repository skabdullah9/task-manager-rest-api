const Task = require("../models/task");

const getAllTasks = async (req, res) => {
    try {
        const tasks = await Task.find({});
        res.status(200).json({ tasks });
    } catch (error) {
        res.status(500).json({ msg: error });
    }
};

const createTask = async (req, res) => {
    console.log(req.body);
    try {
        const task = await Task.create(req.body);
        res.status(201).json({ task });
    } catch (error) {
        res.status(500).json({ msg: error });
    }
};

const getTask = async (req, res) => {
    try {
        const {id: taskID} = req.params;
        const task = await Task.findOne({_id: taskID});
        console.log(task);
        if(!task) return res.status(404).json({msg: 'Task not found'})
        res.status(200).json({ task });
    } catch (error) {
        res.status(500).json({ msg: error });
    }
};

const updateTask = async (req, res) => {
    try {
        const {id: taskID} = req.params;
        const task = await Task.findOneAndUpdate({_id: taskID}, req.body, {new: true, runValidators: true});
        console.log(task);
        if(!task) return res.status(404).json({msg: 'Task not found'})
        res.status(200).json({ task });
    } catch (error) {
        res.status(500).json({ msg: error });
    }
};

const deleteTask = async (req, res) => {
    try {
        const {id: taskID} = req.params;
        const task = await Task.findOneAndDelete({_id: taskID});
        console.log(task);
        if(!task) return res.status(404).json({msg: 'Task not found'})
        res.status(200).json({ task });
    } catch (error) {
        res.status(500).json({ msg: error });
    }
};

module.exports = {
    getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask,
};
