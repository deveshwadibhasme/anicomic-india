const { Readable } = require("stream");
const cloudinary = require('cloudinary').v2; // Make sure to install cloudinary: npm install cloudinary

// Assuming your Cloudinary credentials are in environment variables or a config file:
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME, // Or your config file
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const uploadToCloudinary = (fileBuffer, fileName) => {
  return new Promise((resolve, reject) => {
    console.log("📤 Starting Cloudinary upload...");

    const uploadStream = cloudinary.uploader.upload_stream(
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