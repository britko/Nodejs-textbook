const express = require('express');

const { isLoggedIn } =require('./middlewares');
const User = require('../models/user');
const { db } = require('../models');

const router = express.Router()

router.route('/:id/follow')
    .post(isLoggedIn, async (req, res, next) => {
        try {
            console.log(req.url)
            const user = await User.findOne({ where: { id: req.user.id } })
            if (user) {
                await user.addFollowings(parseInt(req.params.id, 10))
                res.send('success')
            } else {
                res.status(404).send('no user')
            }
        } catch (error) {
            console.error(error)
            next(error)
        }
    })
    .delete(isLoggedIn, async (req, res, next) => {
        try {
            console.log(req.url)
            const user = await User.findOne({ where: { id: req.user.id } })
            if (user) {
                result = await db.sequlize.models.Follow.destroy({ where: { followingId: req.params.id } })
                res.json(result);
                res.send('success')
            } else {
                res.status(404).send('no user')
            }
        } catch (error) {
            console.error(error)
            next(error)
        }
    })

module.exports = router