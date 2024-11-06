const FrameSizeRatio = require("../../models/FrameSizes/FrameSizes");
const FrameSizeRatioVeritcalAndSquare = require("../../models/FrameSizes/FrameSizesVertical");

exports.getFrameSizes = async (req, res) => {
  const { imageType } = req.body;
  console.log("this is get sissss", req.body)
  let getSizes;
  if (imageType === "portrait") {
    getSizes = await FrameSizeRatioVeritcalAndSquare.find();
  } else {
    getSizes = await FrameSizeRatio.find();
  }

  if (getSizes) {
    res.status(200).json({
      success: true,
      getSizes,
    });
  }
};
