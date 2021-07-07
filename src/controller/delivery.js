const Delivery = require("../model/delivery")
const mime = require("mime")


exports.createDelivery = (req,res) => 
{
   console.log({file : req.file, body : req.body})
   const {jsonInputData} = req.body

    const newDelivery = new Delivery(
        {
            jsonInputData : jsonInputData,
            file : req.file.filename
        }

    )
   newDelivery.save(
       (error,product) => 
       {
           if(error)
           {
                console.log(error)
           }
           if(product)
           {
               console.log(product)
           }
       }
   )
}

exports.uploadingapic = async(req,res,next) =>
{
    let matches = req.body.base64image.match(/^data:([A-Za-z-+/]+);base64,(.+)$/),
    response = {};
 
if (matches.length !== 3) {
return new Error('Invalid input string');
}
 
response.type = matches[1];
response.data = new Buffer(matches[2], 'base64');
let decodedImg = response;
let imageBuffer = decodedImg.data;
let type = decodedImg.type;
let extension = mime.extension(type);
let fileName = "image." + extension;
try {
fs.writeFileSync("./images/" + fileName, imageBuffer, 'utf8');
return res.send({"status":"success"});
} catch (e) {
next(e);
}


}