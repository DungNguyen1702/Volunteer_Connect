const validator = require('validator');

function ValidateEmail(email){
    if (validator.isEmail(email)) {
        return true;
    } else {
        return false;
    }
}

const Utils = {
    ValidateEmail
}

export default Utils