const mongoose = require("mongoose");                                  

db = async() => {                                                     
    try{
        await mongoose.connect(process.env.MONGO_URL);
        console.log("DB connection established");
    }
    catch{
        console.log('DB Error');
    }
    
}

module.exports = db;