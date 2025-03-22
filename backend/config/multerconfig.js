const multer  = require('multer')


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'ResumeFolder/')
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now()
      cb(null, file.originalname.replace('.pdf','-') + uniqueSuffix + '.pdf') 
    }
  })
  
const upload = multer({ storage: storage })

module.exports = upload