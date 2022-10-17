const express = require('express');
const router = express.Router();
const Task = require('../models/tasks');

router.get('/', async(req, res) => {
    const tasks = await Task.find();
    res.render('index', {
        tasks
    });
});

router.post('/add', async (req, res) => { //Agrego usuario
    const task = new Task(req.body);
    await task.save();
    res.redirect('/');
});

router.post('/edit/:id', async (req, res) => {
    const {id} = req.params;
    await Task.update({_id: id});
    res.redirect('/');
});

router.get('/delete/:id', async (req, res) => {
    let {id} = req.params;
    await Task.removw({_id: id});
    res.redirect('/');
});

module.exports = router;



