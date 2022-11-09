import mongoose from 'mongoose';
const { Schema } = mongoose;

const UserSchema = new Schema({
  first_name:{
    type: String,
    required: false
  },
  last_name:{
    type: String,
    required: false
  },
  address:{
    type: String,
    required: false
  },
  nic:{
    type: String,
    required: false,
    unique: true
  },
  phone_number:{
    type: String,
    required: false
  },
  email:{
    type: String,
    required: true,
    unique: true
  },
  password:{
    type: String,
    required: true
  },
  is_admin:{
    type: Boolean,
    default: false
  }
}, {timestamps: true});

export default mongoose.model("User", UserSchema)