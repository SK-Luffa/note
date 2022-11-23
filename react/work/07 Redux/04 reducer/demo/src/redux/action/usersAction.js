export const AddUser = Symbol("add-user");
export const DeleteUser = Symbol("delete-user");
export const UpdateUser = Symbol("update-user");

export const fn_AddUser = (user) => ({
  type: AddUser,
  payload:user
})
export const fn_DeleteUser = (id) => ({
    type: DeleteUser,
    payload: id
})
export const fn_UpdateUser = (id,newUserData) => ({
    type: UpdateUser,
    payload: {
        ...newUserData,
        id
    }
})
