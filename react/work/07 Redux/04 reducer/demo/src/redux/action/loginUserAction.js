
export const setLoginUserType=Symbol('set-login-user');

// 设置登录用户的action
export function createsetLoginUserType(user){
    return {
        type: setLoginUserType,
        payload:user
    }
}
