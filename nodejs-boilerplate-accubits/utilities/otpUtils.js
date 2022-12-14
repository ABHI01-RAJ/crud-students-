const otplib = require('otplib');

module.exports.generateOTP = (length, time) => {
  otplib.authenticator.options = {
    digits: 6
  };

  if (length && time) {
    otplib.authenticator.options = {
      digits: length,
      step: time
    };
  }

  const secret = otplib.authenticator.generateSecret();
  const token = otplib.authenticator.generate(secret);
  return {
    token: token,
    secret: secret
  };
};

module.exports.validateOTP = (otp, secret, time) => {
  if (time) {
    otplib.authenticator.options = {
      step: time
    };
  }
  return otplib.authenticator.check(otp, secret);
};
