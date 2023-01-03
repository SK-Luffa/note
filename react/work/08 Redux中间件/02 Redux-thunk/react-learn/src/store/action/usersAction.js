export const ADDUSER = Symbol("add-user");
export const DELETEUSER = Symbol("delete-user");
export const UPDATEUSER = Symbol("update-user");
export const SETUSERS=Symbol("set-users")
export const createAddUserAction = (user) => ({
    type: ADDUSER,
    payload: user
})

export const createDeleteUserAction = (id) => ({
    type: DELETEUSER,
    payload: id
})

export const createUpdateUserAction = (id, newUserData) => ({
    type: DELETEUSER,
    payload: {
        ...newUserData,
        id
    }
})
export const createSetUserAction=(users)=>({
    type:SETUSERS,
    payload:users//用户数组

})
