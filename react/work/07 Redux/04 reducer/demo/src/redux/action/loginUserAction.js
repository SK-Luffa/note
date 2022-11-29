export const setLoginUserType = Symbol("set-login-user");

// 设置用户登录的action
// user 表示当前登陆的用户
export function createSetLoginUserAction(user) {

    return {
        type: setLoginUserType,
        payload: user
    }
}