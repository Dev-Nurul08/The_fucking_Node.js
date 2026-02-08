import multer from "multer";

const storage = multer.diskStorage({
    destination:(req,file,cd)=>{
        return cd(null,'uploads/');
    },
    filename:(req,file,cb)=>{
        return cb(null,file.originalname + "-" + Date.now())
    }
})

const imageUploads = multer({storage:storage}).single('image');

export default imageUploads;