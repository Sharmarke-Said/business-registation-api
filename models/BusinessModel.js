import mongoose from "mongoose";

const licenseSchema = new mongoose.Schema({
  name: { type: String, required: true },
  issuedBy: { type: String },
  issueDate: { type: Date },
  expiryDate: { type: Date },
});

const documentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  url: { type: String, required: true },
  uploadedAt: { type: Date, default: Date.now },
});

const businessSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    businessName: { type: String, required: true },
    businessTypeId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "BusinessType",
      required: true,
    },
    ownerName: { type: String, required: true },
    contactEmail: { type: String, required: true },
    contactPhone: { type: String, required: true },
    contactAddress: { type: String, required: true },
    businessAddress: { type: String },
    documents: [documentSchema],
    legalInfo: {
      registrationNumber: { type: String },
      licenses: [licenseSchema],
    },
    status: {
      type: String,
      enum: ["pending", "approved", "rejected"],
      default: "pending",
    },
  },
  { timestamps: true }
);

export default mongoose.model("Business", businessSchema);
