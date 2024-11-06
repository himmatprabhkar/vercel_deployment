const MotifBorder = require('../../models/MotifBorder/MotifBorder')

exports.getMotifBorderSizes = async(req, res) => {

    const getMotifBorders = await MotifBorder.find();
    
    if(getMotifBorders){
        res.status(200).json({
            success: true,
            getMotifBorderSizes: getMotifBorders
        })
    
    }
}