const userRouter = require('./user');
const studentRouter = require('./student');
const courseRouter = require('./course');

function route(app) {
    app.use('/user', userRouter);
    app.use('/student', studentRouter);
    app.use('/course', courseRouter);

    
}
module.exports = route;