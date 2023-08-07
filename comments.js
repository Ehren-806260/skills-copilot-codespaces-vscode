// create web server
// 1. import express
const express = require('express');
// 2. create web server object
const app = express();
// 3. create router object
const router = express.Router();
// 4. register router object
app.use(router);
// 5. register router object
router.get('/comments', (req, res) => {
    res.send('get comments');
});
router.post('/comments', (req, res) => {
    res.send('post comments');
});
router.put('/comments', (req, res) => {
    res.send('put comments');
});
router.delete('/comments', (req, res) => {
    res.send('delete comments');
});
// 6. start web server
app.listen(3000, () => {
    console.log('web server is listening port 3000...');
});

