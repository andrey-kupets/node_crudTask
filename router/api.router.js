const router = require('express').Router();

const { userRouter } = require('.');

router.use('/users', userRouter);

module.exports = router;
