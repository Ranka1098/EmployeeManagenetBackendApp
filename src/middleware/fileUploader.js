import multer from "multer";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import cloudinary from "cloudinary";

// Cloudinary configuration
cloudinary.v2.config({
  cloud_name: "dnwev3ewk",
  api_key: "894615256536411",
  api_secret: "HWwOy3p4sqcyr4HJVeyM2-4JimI",
});

// Cloudinary storage setup
const storage = new CloudinaryStorage({
  cloudinary: cloudinary.v2,
  params: {
    folder: "",
    allowed_formats: ["jpg", "png", "jpeg", "webp"],
  },
});

// Create multer instance
const cloudinaryFileuploader = multer({ storage });

export default cloudinaryFileuploader;
