import { combineReducers } from "redux";
import galleryReducer from "./galleryReducer";
import postsReducer from "./postsReducer";
import usersReducer from "./usersReducer";
import { reducer as formReducer} from 'redux-form'

type rootReducerType = typeof rootReducer
export type appStateType = ReturnType<rootReducerType>


let rootReducer = combineReducers({
    users: usersReducer,
    posts: postsReducer,
    gallery: galleryReducer,
    form: formReducer
})

export default rootReducer