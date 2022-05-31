const express = require('express');

const { isLoggedIn } =require('./middlewares');
const { addFollowing } = require('../controllers/user');

const router = express.Router()

router.route('/:id/follow')
    .post(isLoggedIn, addFollowing)
    // .delete(isLoggedIn, async (req, res, next) => {
    //     try {
    //         console.log(req.url)
    //         const user = await User.findOne({ where: { id: req.user.id } })
    //         if (user) {
    //             result = await db.sequlize.models.Follow.destroy({ where: { followingId: req.params.id } })
    //             res.json(result);
    //             res.send('success')
    //         } else {
    //             res.status(404).send('no user')
    //         }
    //     } catch (error) {
    //         console.error(error)
    //         next(error)
    //     }
    // })

// router.post('/:id/follow', isLoggedIn, addFollowing)

module.exports = router