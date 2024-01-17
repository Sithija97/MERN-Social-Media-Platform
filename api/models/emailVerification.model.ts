import mongoose, { Schema } from "mongoose";

const emailVerificationSchema = new Schema({
  userId: String,
  token: String,
  createdAt: Date,
  expiresAt: Date,
});

const EmailVerification = mongoose.model(
  "EmailVerification",
  emailVerificationSchema
);
export { EmailVerification };
