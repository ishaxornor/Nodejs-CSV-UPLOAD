const multer = require("multer");

const csvFilter = (req,file,cb)=>{
    if(file.mimetype.includes("csv")){
        cb(null,true);
    }else {
        cb("Please upload only CSV file" , false);
    }
};

var storage = multer.diskStorage({
    destination: (req, file , cb)=>{
        cb(null , __basedir + "/home/xornor/Documents/Nodejs-Upload-CSV/resources/static/assets/uploads/Isha.csv");
    },
    filename: (req, file ,cb)=>{
        console.log(file.originalname);
        cb(null, `${Date.now()}-example-${file.originalname}`);
    },
});

var uploadFile = multer({storage: storage , fileFilter:csvFilter});
module.exports = uploadFile;