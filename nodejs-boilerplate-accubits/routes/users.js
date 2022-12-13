var express = require('express');
var router = express.Router();
var multer = require('multer');
const upload = multer({ storage: multer.memoryStorage() });
 

var db = require('../mysqlModels')

const Students = db.students

// router.get('/add', function(req, res, addStudent) {    
//     // render to add.ejs
//     res.render('users/add', {
//         name: '',
//         email: '',
//         position: '',
//         img:''
//     })
// })

// // add a new user
// router.post('/add',upload.single('img'), function(req, res, addStudent) {    

//     let name = req.body.name;
//     let email = req.body.email;
//     let position = req.body.position;
//     let img= req.file.buffer.toString('base64');
//     let errors = false;

//         // insert query
//         var addStudent =  async (req, resp) => {
            
//             let response = {
//                 data:'ok'
//             }

//             resp.status(200).json(response)
//             console.log("Asdads")
//     }
//     module.exports = {
//     addStudent
// }
// })



// // display user page
// router.get('/', function(req, res, next) {      
//     dbConn.query('SELECT * FROM students ORDER BY id desc',function(err,rows)     {
//         if(err) {
//             req.flash('error', err);
//             // render to views/users/index.ejs
//             res.render('users',{data:''});   
//         } else {
//             // render to views/users/index.ejs
//             res.render('users',{data:rows});
//         }
//     });
// });

// // display add user page


// // display edit user page
// router.get('/edit/(:id)', function(req, res, next) {

//     let id = req.params.id;
    
   
//     dbConn.query('SELECT * FROM students WHERE id = ' + id, function(err, rows, fields) {
//         if(err) throw err
         
//         // if user not found
//         if (rows.length <= 0) {
//             req.flash('error', 'student not found with id = ' + id)
//             res.redirect('/users')
//         }
//         // if user found
//         else {
//             // render to edit.ejs
//             res.render('users/edit', {
//                 title: 'Edit User', 
//                 id: rows[0].id,
//                 name: rows[0].name,
//                 email: rows[0].email,
//                 position: rows[0].position,
//                 img: rows[0].img
//             })
//         }
//     })
// })

// // update user data
// router.post('/update/:id',upload.single('img'), function(req, res, next) {

//     let id = req.params.id;
//     let name = req.body.name;
//     let email = req.body.email;
//     let position = req.body.position;
//     let img = req.file.buffer.toString('base64');
//     let errors = false;

//     if(name.length === 0 || email.length === 0 || position.length === 0) {
//         errors = true;
        
//         // set flash message
//         req.flash('error', "Please enter name and email and class");
//         // render to add.ejs with flash message
//         res.render('users/edit', {
//             id: req.params.id,
//             name: name,
//             email: email,
//             position: position,
//             img:img
//         })
//     }

//     // if no error
//     if( !errors ) {   
 
//         var form_data = {
//             name: name,
//             email: email,
//             position: position,
//             img:img
//         }
//         // update query
//         dbConn.query('UPDATE users students ? WHERE id = ' + id, form_data, function(err, result) {
//             //if(err) throw err
//             if (err) {
//                 // set flash message
//                 req.flash('error', err)
//                 // render to edit.ejs
//                 res.render('users/edit', {
//                     id: req.params.id,
//                     name: form_data.name,
//                     email: form_data.email,
//                     position: form_data.position,
//                     img: form_data.img
//                 })
//             } else {
//                 req.flash('success', 'Student successfully updated');
//                 res.redirect('/users');
//             }
//         })
//     }
// })
   
// // delete user
// router.get('/delete/(:id)', function(req, res, next) {

//     let id = req.params.id;
     
//     dbConn.query('DELETE FROM students WHERE id = ' + id, function(err, result) {
//         //if(err) throw err
//         if (err) {
//             // set flash message
//             req.flash('error', err)
//             // redirect to user page
//             res.redirect('/users')
//         } else {
//             // set flash message
//             req.flash('success', 'Student successfully deleted! ID = ' + id)
//             // redirect to user page
//             res.redirect('/users')
//         }
//     })
// })

module.exports = router;