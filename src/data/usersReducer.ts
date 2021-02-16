import { Dispatch } from "redux";
import { ThunkAction } from "redux-thunk";
import { usersAPI } from "../api/api";
import { userInterface } from "../types/types";
import { SET_USERS } from "./actionTypes";
import { appStateType } from "./rootReducer";

let initialState = {
    users: [] as Array<userInterface>
}

const usersReducer = (state = initialState, action: actionType): typeof initialState => {
    switch (action.type) {
        case SET_USERS:
            return {
                ...state,
                users: [...action.users] 
            }
        default: return state
    }
}

type actionType = setUsersActionInterface

interface setUsersActionInterface {
    type: typeof SET_USERS,
    users: Array<userInterface>
}

const setUsersActionCreator = (users: Array<userInterface>): setUsersActionInterface => 
    ({ type: SET_USERS, users: users})

export const getUsersThunkCreator = (): ThunkAction<Promise<void>, appStateType, any, actionType> => async (dispatch: Dispatch<actionType>) => {
    let response = await usersAPI.getUsers()
    dispatch(setUsersActionCreator(response.data))
}

export default usersReducer