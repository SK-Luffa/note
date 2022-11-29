export const AddUser=Symbol("add-user");
export const DeleteUser = Symbol("delete-user");
export const UpdateUser = Symbol("Update-user");

export const createAddUserAction = (user) => ({
    type: AddUser,
  payload:user
})

export const createDeleteUserAction = (id) => ({
    type: DeleteUser,
    payload: id
})
export const createUpdateUserAction = (id,newUserData ) => ({
    type: UpdateUser,
    payload: {
    ...newUserData,
        id,
    }
})
