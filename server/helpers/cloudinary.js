const cloudinary = require("cloudinary").v2;
const multer = require("multer");



cloudinary.config({
  cloud_name: 'dvb4toelz',
  api_key: '769511719163392',
  api_secret: 'fRvWIUZoNVCykrcxaNIou1kzCEQ',
  secure: true,
});

const storage = new multer.memoryStorage();

async function imageUploadUtil(file) {
  const result = await cloudinary.uploader.upload(file, {
    resource_type: "auto",
  });

  return result;
}

const upload = multer({ storage });

module.exports = { upload, imageUploadUtil };
