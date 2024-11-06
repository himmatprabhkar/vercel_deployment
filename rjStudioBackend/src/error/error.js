module.exports.validationError = (msg) => {
    return {
        status: false,
        message: msg
    }
}