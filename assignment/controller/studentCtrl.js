const multer = require('multer')
const path = require('path')
var db = require('../models')
var Student = db.student

var addStudent = async (req,res) => {
    
    let info = {
        image: req.file.path,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        class: req.body.class,
    }
    const stdt = await Student.create(info)
    res.status(200).send(stdt)
    console.log(stdt)

}

var getStudents = async (req, res) => {
     const data = await Student.findAll({ });
    res.status(200).json({data:data})
}

var getStudent = async (req, res) => {
    const data = await Student.findOne({ 
        where: {
            id:req.params.id
        }
     });
    res.status(200).json({data:data})
}

// var postStudents = async (req, res) => {
//     var postData = req.body
//     const data = await Student.create(postData);
//     res.status(200).json({data:data})
// }

var deleteStudent = async (req, res) => {
    const data = await Student.destroy({ 
        where: {
            id:req.params.id
        }
     });
    res.status(200).json({data:data})
}

var patchStudent = async (req, res) => {
    const data = await Student.update(req.body,{ 
        where: {
            id:req.params.id
        }
     });
    res.status(200).json({data:data})
}

const storage = multer.diskStorage({
    destination: (req,file,cb) => {
        cb(null,'Images')
    },
    filename: (req, file, cb) => {
        cb(null,Date.now()+path.extname(file.originalname))
    }
})

const upload = multer({
    storage: storage,
    limits: { fileSize: '5000000' },
    fileFilter: (req, file, cb) => {
        const fileTypes = /jpeg|jpg|png|gif/
        const mimeType = fileTypes.test(file.mimetype)
        const extname = fileTypes.test(path.extname(file.originalname))

        if (mimeType && extname) {
            return cb(null,true)
        }
        cb("give proper files format")
    }
}).single('image')

module.exports = {
    addStudent,
    getStudents,
    getStudent,
    // postStudents,
    deleteStudent,
    patchStudent,
    upload
}