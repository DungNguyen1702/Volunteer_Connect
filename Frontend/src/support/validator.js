const validator = require('validator');

function ValidateEmail(email){
    if (validator.isEmail(email)) {
        return true;
    } else {
        return false;
    }
}

function ValidateTelephone(telephone) {
    return validator.isMobilePhone(telephone, 'any', { strictMode: false }) && telephone.length >= 10;
}

const Utils = {
    ValidateEmail,
    ValidateTelephone
}

export default Utils