const captcha =require('svg-captcha')

module.exports.qrcodeService = async () =>  {
  return await captcha.create()
    
}