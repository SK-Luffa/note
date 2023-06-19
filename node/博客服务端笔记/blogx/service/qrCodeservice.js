const captcha =require('svg-captcha')

module.exports.qrcodeService = async () =>  {
  return captcha.create()
    
}