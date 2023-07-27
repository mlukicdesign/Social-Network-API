const router = require('express').Router();

const {
  getAllUsers,
  createUser,
  getUserById,
  updateUserById,
  deleteUserById,
  addFriend,
  removeFriend,
} = require('../../controllers/userController');

// GET and POST all users
router.route('/').get(getAllUsers).post(createUser);

//api/user/:userID
router.route('/:userId').get(getUserById).put(updateUserById).delete(deleteUserById);

// //api/friend/:friendID
router.route('/:userId/friends/:friendId').post(addFriend).delete(removeFriend);


// Export the router
module.exports = router;