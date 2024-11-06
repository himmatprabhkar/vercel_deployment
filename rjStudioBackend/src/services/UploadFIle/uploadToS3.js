const fs = require("fs");
const AWS = require("aws-sdk");
require("dotenv").config();

AWS.config.credentials = new AWS.Credentials({
  accessKeyId: process.env.ACCESS_KEY_ID,
  secretAccessKey: process.env.SECRET_ACCESS_KEY,
});

AWS.config.region = process.env.REGION;

const s3 = new AWS.S3();

function uploadImageToS3(filePath, fileName, contentType) {

  const fileContent = fs.readFileSync(filePath);

  const params = {
    Bucket: process.env.AWS_BUCKET_NAME,
    Key: fileName,
    Body: fileContent,
    ContentType: contentType,
    ACL: "public-read",
  };

  return new Promise((resolve, reject) => {
    s3.upload(params, (err, data) => {
      if (err) {
        console.error("Error uploading file:", err);
        reject(err);
      } else {
        console.log("File uploaded successfully. URL:", data.Location);
        resolve(data.Location);
      }
    });
  });
}

module.exports = uploadImageToS3;
