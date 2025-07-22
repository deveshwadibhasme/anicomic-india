const { Readable } = require("stream");
const dotenv = require("dotenv");
const cloudinary = require("../config/cloudinary"); 

dotenv.config();

const uploadToCloudinary = (fileBuffer, fileName) => {
  return new Promise((resolve, reject) => {
    const uploadStream = cloudinary.uploader.upload_stream(
      { folder: "my_uploads", public_id: fileName, resource_type: "raw" }, // Use "raw" for PDFs
      (error, result) => {
        if (error) {
          console.error("❌ Cloudinary Upload Error:", error);
          return reject(error);
        }
        resolve(result);
      }
    );

    if (!uploadStream) {
      console.error("❌ Cloudinary uploadStream is undefined");
      return reject(new Error("Cloudinary upload stream creation failed"));
    }
    const bufferStream = Readable.from(fileBuffer);
    bufferStream.pipe(uploadStream);
  });
};

module.exports = uploadToCloudinary;
