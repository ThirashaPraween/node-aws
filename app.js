const express = require('express');
const morgan = require('morgan'); 
const mongoose = require('mongoose');
const blogRoutes = require('./routes/blogRoutes')

// const { render } = require('ejs');


// express app
const app = express();

// connect to mongo db
const dbURI = 'mongodb+srv://thirasha:thirasha1234@nodetutus-jasu9.mongodb.net/nodetutorial?retryWrites=true&w=majority';
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then((result) => app.listen(3000))
    .catch((err) => console.log(err));

// Register view engine
app.set('view engine', 'ejs');





// middleware & static files
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

app.use(morgan('dev'));

// app.get('/add-blog', (req, res) => {
//     const blog = new Blog({
//         title: 'new blog 2',
//         snippet: 'about snippets my new blog',
//         body: "more about my new blog"
//     });

//     blog.save()
//         .then((results) => {
//             res.send(results);
//         })
//         .catch((err) => {
//             console.log(err);
//         });
// });

// app.get('/all-blogs', (req, res) => {
//     Blog.find()
//         .then((result) => {
//             res.send(result);
//         })
//         .catch((err) => {
//             console.log(err);
//         })
// });

// app.get('/single-blog', (req, res) => {
//     Blog.findById('5ef3430abfbbb748044675c2')
//         .then((result) => {
//             res.send(result);
//         })
//         .catch((err) => {
//             console.log(err);
//         })
// })

// app.use((req, res, next) => {
//     console.log('in the next middleware');
//     next();
// });



app.get('/about', (req, res) => {
    // res.sendFile('./views/about.html', { root: __dirname });
    res.render('about', { title: 'About' });
});

// app.use('/blogs' ,blogRoutes); // ? extend the routing urls
app.use(blogRoutes);

// redirect
// app.get('/about-us', (req, res) => {
//     res.redirect('/about');
// });


// 404 page middleware
app.use((req, res) => {
    // res.status(404).sendFile('./views/404.html', {root: __dirname});
    res.status(404).render('404', { title: '404' });
});