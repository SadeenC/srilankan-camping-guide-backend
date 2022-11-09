const mongoose = require('mongoose');
const bcrypt = require('bcrypt')

const UserSchema = new mongoose.Schema({
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

UserSchema.pre('save',async function(next){
   const salt = await bcrypt.genSalt()
   this.password = await bcrypt.hash(this.password,salt)
   next()
})

UserSchema.static.login = async function(email,password){
    const user = this.findOne({email})
    if (user) {
      const isCorrect = await bcrypt.compare(user.password,password)
      if (!isCorrect) throw Error("wrong password")
      else return user;
    }
    else throw Error("user not found")
}

const userModel = mongoose.model("User", UserSchema)

module.exports =  userModel;