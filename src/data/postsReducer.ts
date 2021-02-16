import { Dispatch } from "redux"
import { ThunkAction } from "redux-thunk"
import { postsAPI } from "../api/api"
import { myPostInterface, postInterface } from "../types/types"
import { NEW_POST, SET_POSTS } from "./actionTypes"
import { appStateType } from "./rootReducer"

let initialState = {
    posts: [] as Array<postInterface>,
    myPosts: [
        {id: 99, text: 'Привет! Это мой первый пост'},
        {id: 100, text: 'Второй пост'}
    ] as Array<myPostInterface>
}

const postsReducer = (state = initialState, action: any): typeof initialState => {
    switch (action.type) {
        case SET_POSTS:
            return {
                ...state,
                posts: [...action.posts]
            }
        case NEW_POST:
            return {
                ...state,
                myPosts: [...state.myPosts,
                {
                    id: action.id,
                    text: action.text
                }
                ]
            }
        default: return state
    }
}

type actionTypes = setPostsActionInterface | newMyPostsActionInterface 

interface setPostsActionInterface {
    type: typeof SET_POSTS,
    posts: Array<postInterface>
}

interface newMyPostsActionInterface {
    type: typeof NEW_POST,
    id: number,
    text: string
}

type thunkType = ThunkAction<Promise<void>, appStateType, any, actionTypes>

const setPostsActionCreator = (posts: Array<postInterface>): setPostsActionInterface =>
    ({ type: SET_POSTS, posts: posts })

const newMyPostActionCreator = (id: number, text: string): newMyPostsActionInterface =>
    ({ type: NEW_POST, id: id, text: text })

export const getPostsThunkCreator = (): thunkType => async (dispatch: Dispatch<actionTypes>) => {
    let response = await postsAPI.getPosts()
    dispatch(setPostsActionCreator(response.data))
}

export const newPostThunkCreator = (id: number, body: string): thunkType => async (dispatch: Dispatch<actionTypes>) => {
    await postsAPI.newPost(id, body)
    dispatch(newMyPostActionCreator(id, body))
}

export default postsReducer