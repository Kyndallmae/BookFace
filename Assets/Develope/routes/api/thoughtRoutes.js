const router = require('express').Router();
const {
  getAllThoughts,
  getSingleThoughtById,
  createThoughtById,
  updateThoughtById,
  deleteThoughtById,
  addThoughtResponse,
  removeThoughtResponse,
} = require('../../controllers/userController');

// /api/thoughts
router.route('/').get(getAllThoughts).post(createThoughtById);

// /api/thought/:thoughtId
router
  .route('/:thoughtId')
  .get(getSingleThoughtById)
  .put(updateThoughtById)
  .delete(deleteThoughtById);

// /api/thought/:thoughtId/reactions
router.route('/:thoughtId/reactions').post(addThoughtResponse);

// /api/thought/:thoughtId/reaction/:reactionId
router.route('/:thoughtId/reaction/:reactionId').delete(removeThoughtResponse);

module.exports = router;