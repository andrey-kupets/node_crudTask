const router = require('express').Router();

const { userController } = require('../controller');
const { userMiddleware } = require('../middleware');

router.route('/')
  .get(userController.getUsers)
  .post(
    userMiddleware.isUserValid,
    userMiddleware.doesUserAlreadyExist,
    userController.createUser
  );

router.use('/:userId',
  userMiddleware.isUserIdValid,
  userMiddleware.checkUserExistenceByDynamicParams('userId', 'params', '_id'));

router.route('/:userId')
  .delete(userController.removeUserById)
  .put(userController.updateUser);

module.exports = router;
