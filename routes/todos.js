const {Router} = require('express')
const Users = require('../models/users')
const router = Router()

router.get('/',async (req, res) => {
    const users = await Users.find({}).lean()
    res.render('index', {
        title: 'Doi Brando',
        isIndex: true,
        users
    });
})

router.get('/create', (req, res) => {
    res.render('create', {
        title: 'Jotaro',
        isCreate: true
    })
})

router.post('/create', async (req, res) => {
    const users = Users({
        name: req.body.name,
        date: req.body.date
    })

    await users.save()
    res.redirect('/')
})

router.post('/post', async(req, res) => {
    await Users.deleteOne({_id: req.body.id}, (err) => {
        if (err) return err;

    })
    res.redirect('/')
})

module.exports = router