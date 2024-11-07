const AWS = require("aws-sdk");
require("dotenv").config();

AWS.config.credentials = new AWS.Credentials({
  accessKeyId: process.env.ACCESS_KEY_ID,
  secretAccessKey: process.env.SECRET_ACCESS_KEY,
});

AWS.config.region = process.env.REGION;

const s3 = new AWS.S3();

console.log("process.env.AWS_BUCKET_NAMEprocess.env.AWS_BUCKET_NAME", process.env.AWS_BUCKET_NAME);

function uploadImageToS3(fileBuffer, fileName, contentType) {
  const params = {
    Bucket: process.env.AWS_BUCKET_NAME,
    Key: fileName,
    Body: fileBuffer,  // Directly use the buffer
    ContentType: contentType,
    ACL: "public-read",
  };

  console.log('paramsparamsparamsparams', params);

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
