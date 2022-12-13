const express = require('express')
const app = express()
var bodyParser = require('body-parser')

require('./mysqlModels')

var studentCtrl = require('./controller/studentCtrl')

app.use(bodyParser.json())

app.get('/', function (req, res){
    res.send('Abhishek is doing crud')
})
app.get('/add',studentCtrl.upload, studentCtrl.addStudent)


app.get('/students', studentCtrl.getStudents)
app.get('/students/:id', studentCtrl.getStudent)

app.delete('/students/:id', studentCtrl.deleteStudent)

// app.post('/students', studentCtrl.postStudents)


app.patch('/students/:id',studentCtrl.patchStudent)
// Student.sync({alter:true })
// Contact.sync({alter:true })




// static image folder
app.use('/Images',express.static('./Images'))




app.listen(3000, () => {
    console.log("app will run on : http://localhost:3000")
})