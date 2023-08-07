// Create web server

// Import modules
const express = require('express');
const router = express.Router();
const commentController = require('../controllers/commentController');
const {check} = require('express-validator');
const auth = require('../middleware/auth');

// Create comment
// api/comments
router.post('/',
    auth,
    [
        check('comment', 'Comment is required').not().isEmpty(),
        check('task', 'Task is required').not().isEmpty()
    ],
    commentController.createComment
);

// Get comments by task
// api/comments
router.get('/',
    auth,
    [
        check('task', 'Task is required').not().isEmpty()
    ],
    commentController.getComments
);

// Update comment
// api/comments/:id
router.put('/:id',
    auth,
    [
        check('comment', 'Comment is required').not().isEmpty()
    ],
    commentController.updateComment
);

// Delete comment
// api/comments/:id
router.delete('/:id',
    auth,
    commentController.deleteComment
);

module.exports = router;