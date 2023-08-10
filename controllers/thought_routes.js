const router = require('express').Router();
const Thought = require('../models/Thought');


function isAuthenticated(req, res, next) {
  const isAuthenticated = req.session.user_id;

  if (!isAuthenticated) return res.redirect('/login');

  next();
}


// Add a thought
router.post('/customRecipes', isAuthenticated, async (req, res) => {
  const userId = req.session.user_id;
  console.log('mira lo que sale aqui',userId);


  try {
    await Thought.create({
      title: req.body.title,
      text: req.body.text,
      userId: userId, 
    });

    res.redirect('/customRecipes');
  } catch (error) {
    console.error('Error :', error);
    res.status(500).send('Error.');
  }
});


router.delete('/customRecipes/:id', async (req, res) => {
  try {
 
    const recipe = await Thought.destroy({
      where: {
          id: req.params.id,
          
      },
  });
    console.log('thought ID received:', recipe);
    if (!recipe) {
     
      return res.status(404).json({ message: 'thought not found' });
    }

    res.status(204).end();
  } catch (error) {
    console.error('Error deleting thought:', error);
    res.status(500).json({ message: 'Error deleting thought' });
  }
});


module.exports = router;
