//自定义错误

// 当错误发生时，这里捕获到错误，然后抛出我们自定义的错误信息



// 业务处理错误基类
class ServiceError extends Error{
    constructor(message,code){//message 错误消息 code  错误消息码
        
        super(message)
        this.code=code 
    }
    //方法
    toResponseJSON(){}

}

// 总共写五种错误：文件上传错误、禁止访问错误、验证错误、无资源错误、其他错误


 
// 文件上传错误
exports.UploadError=class extends ServiceError{
    constructor(message){
        super(message,413);
    }
}
// 禁止访问错误
exports.ForbiddenError = class extends ServiceError {
    constructor(message) {
        super(message, 401);
    }
}

//  验证错误

exports.VerificationError = class extends ServiceError {
    constructor(message) {
        super(message, 406);
    }
}
// 无资源错误
exports.NotFoundError = class extends ServiceError {
    constructor() {
        super("无资源NotFound", 403);
    }
}
// 其他错误


exports.UnknownError = class extends ServiceError {
    constructor() {
        super("UnknownError,服务器错误,", 500);
    }
}

module.exports.ServiceError=ServiceError;