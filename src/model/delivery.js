const mongoose =  require("mongoose")

const deliverySchema =  new mongoose.Schema({
file : {
        type:String
    },
    jsonInputData : {
        type : String
    }

})



module.exports = mongoose.model("Deliverys",deliverySchema)