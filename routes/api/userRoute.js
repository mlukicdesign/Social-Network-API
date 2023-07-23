const router = require('express').Router();

const {
  getAllUsers,
  getUser,
  createUser,
  updateUserById,
  deleteUserById,
  addFriend,
  removeFriend,
} = require('../../controllers/userController');

// GET and POST all users
router.route('/').get(getAllUsers).post(createUser);

//api/user/:userID
// router.route('/:userId').get(getUser).put(updateUserById).delete(deleteUserById);

// //api/friend/:friendID
// router.route('/:userId/friends/:friendId').post(addFriend).delete(removeFriend);


// Export the router
module.exports = router;