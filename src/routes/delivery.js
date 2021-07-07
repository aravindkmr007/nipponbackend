const express = require("express")
const router = express.Router()
const multer = require("multer")
const {createDelivery,uploadingapic} =  require("../controller/delivery")
const path = require("path")
const shortid =  require("shortid")

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.join(path.dirname(__dirname),"uploads"))
    },
    filename: function (req, file, cb) {
      cb(null, shortid.generate() +".jpg")
    }
  })
   
const upload = multer({ storage })

router.post("/delivery",upload.single("file"),createDelivery )
router.post("/deliverybase64",uploadingapic)
router.get("/work",(req,res) => 
{
  res.status(200).json({message : "Aravind"})
})


module.exports = router






