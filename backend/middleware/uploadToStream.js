const { Readable } = require("stream");
const dotenv = require("dotenv");
const cloudinaryConfig = require("../config/cloudinary"); 

dotenv.config();

const uploadToCloudinary = (fileBuffer, fileName) => {
  return new Promise((resolve, reject) => {
    console.log("📤 Starting Cloudinary upload...");

    const uploadStream = cloudinaryConfig.uploader.upload_stream(
      { folder: "my_uploads", public_id: fileName, resource_type: "raw" }, // Use "raw" for PDFs
      (error, result) => {
        if (error) {
          console.error("❌ Cloudinary Upload Error:", error);
          return reject(error);
        }
        console.log("✅ Cloudinary Upload Success:", result.secure_url);
        resolve(result);
      }
    );

    if (!uploadStream) {
      console.error("❌ Cloudinary uploadStream is undefined");
      return reject(new Error("Cloudinary upload stream creation failed"));
    }

    console.log("📜 Converting file buffer to stream...");
    const bufferStream = Readable.from(fileBuffer);

    bufferStream.on("data", (chunk) => {
      console.log("🟡 Streaming data chunk size:", chunk.length);
    });

    bufferStream.on("end", () => {
      console.log("✔️ Buffer stream ended, waiting for upload completion...");
    });

    bufferStream.on("error", (err) => {
      console.error("❌ Buffer Stream Error:", err);
      reject(err);
    });

    console.log("🚀 Piping buffer stream to Cloudinary...");
    bufferStream.pipe(uploadStream);
  });
};

module.exports = uploadToCloudinary;
