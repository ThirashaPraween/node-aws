const express = require('express');
const router  = express.Router();

const blogController = require('../controllers/blogController');

// blog routes

// app.get('/', (req, res) => {
//     // res.send('<p>homepage</p>');
//     // res.sendFile('./views/index.html', { root: __dirname });
//     // const blogs = [
//     //     {title: 'Yoshi finds eggs', snippet: 'lorem ipsum dolor sit amet consectetur'},
//     //     {title: 'Mario finds stars', snippet: 'lorem ipsum dolor sit amet consectetur'},
//     //     {title: 'How to defeat bowser', snippet: 'lorem ipsum dolor sit amet consectetur'}
//     // ];
//     // res.render('index', { title: 'Home', blogs: blogs });
//     res.redirect('/blogs')
// });

router.get('/', blogController.blog_index);



// router.get('/blogs', (req, res) => {
//     Blog.find().sort({ createdAt: -1 })
//         .then((results) => {
//             res.render('index', {title: 'All Blogs', blogs: results});
//         })
//         .catch(err => {
//             console.log(err)
//         })
// });



// router.post('/blogs', (req, res) => {
    
// });

router.get('/blogs', blogController.blog_index);

router.post('/blogs', blogController.blog_create_post);

// router.get('/blogs/create', (req, res) => {
   
// });

router.get('/blogs/create',blogController.blog_create_get);

// router.get('/blogs/:id', (req, res) => {
    
// });

router.get('/blogs/:id', blogController.blog_details);

// router.delete('/blogs/:id', (req, res) => {
    
// });

router.delete('/blogs/:id', blogController.blog_delete);


module.exports = router;