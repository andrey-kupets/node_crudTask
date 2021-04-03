const router = require('express').Router();

const { userRouter } = require('.');

router.all('/users', userRouter);

module.exports = router;
