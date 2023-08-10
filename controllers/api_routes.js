const router = require('express').Router();
const User = require("../models/User");

router.put('/api/image', async (req, res)  => {
    try {
         await User.update({
        profileImageUrl: req.body.image_url 
        },{
            where: {
                id: req.session.user_id
            }
        })
        res.send('updated!!')
    } catch (error) {
        console.log(err);
    }
   
})

module.exports = router;