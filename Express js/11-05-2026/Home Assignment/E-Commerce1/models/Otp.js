// import mongoose from "mongoose";

// const otpSchema = new mongoose.Schema(
//   {
//     email: {
//       type: String,
//       required: true,
//       trim: true,
//       lowercase: true,
//     },

//     otp: {
//       type: String,
//       required: true,
//     },

//     createdAt: {
//       type: Date,
//       default: Date.now,
//     //   expires: 300,
//     },
//   },
//   {
//     timestamps: true,
//   }
// );
// const OTP = mongoose.model("OTP", otpSchema);
// export default OTP;
const{Schema, model } =require("mongoose") ;

const otpSchema = new Schema({
  email: { type: String, required: true },
  otp: { type: String, required: true },
  createdAt: {
    type: Date,
    default: Date.now,
    expires: 600,
  },
});
module.exports= model("Otp", otpSchema);