import mongoose from "mongoose";

const userSchema = new mongoose.Schema({

    email : {
        type:String,
        required:true,
        unique:true
    },
    password : {
        type:String,
        required:true
    },
    isBlocked : {
        type:Boolean,
        required:true,
        default:false
    },
    role : {
        type:String,
        required:true,
        default:"customer"
    },
    firstName : {
        type:String,
        required:true
    },
    lastName : {
        type:String,
        required:true
    },
    address : {
        type:String,
        required:true
    },
    phone : {
        type:String,
        required:true
    },
    profilePicture : {
        type:String,
        required:true,
        default:"https://pixabay.com/vectors/user-remove-icon-person-personal-2935522/"
    }
});

const User = mongoose.model("user",userSchema);

export default User;


//"email": "jane.smith@example.com",
//"password": "mySecurePass456"
//"role": "customer"

//"email": "sophia.wilson@example.com",
//"password": "sophiaAdmin123",
//"role": "admin"


//"email": "liam.brown@example.com",
//"password": "hashedpassword321",
//"role": "customer"

//"email": "amelia.davis@example.com",
//"password": "securehashedadmin456",
//"role": "admin"
