const mongoose = require("mongoose");
const mongoURI = "mongodb://localhost:27017/inotebook";

// Unsucessful code because of old version
// const connectToMongo = ()=> {
//     mongoose.connect(mongoURI, ()=>{
//         console.log("Connected to mongo successfully");
//     })
// }

// module.exports = connectToMongo;

// New version 
const connectToMongo = () => {
  mongoose
    .connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("Connected Successfully"))
    .catch((err) => {
      console.error(err);
    });
};

module.exports = connectToMongo;
