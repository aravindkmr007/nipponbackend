const express  = require("express")
const app =  express()
const cors =  require("cors")
const mongoose = require("mongoose")
const deliveryRoutes =  require("./src/routes/delivery")

app.use(express.json({limit : "100mb"}))
app.use(cors())
mongoose.connect('mongodb+srv://nippon:nipponbackend@cluster0.0ogix.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', () => {
    console.log("DB is Conntected")
}, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true });

app.use("/",deliveryRoutes)



app.listen(2000, () => 
console.log("Server is running"))