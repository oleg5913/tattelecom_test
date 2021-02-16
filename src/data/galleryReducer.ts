import { Dispatch } from "redux"
import { ThunkAction } from "redux-thunk"
import { galleryAPI } from "../api/api"
import { albumInterface, photoInterface } from "../types/types"
import { SET_ALBUMS, SET_PHOTOS } from "./actionTypes"
import { appStateType } from "./rootReducer"

let initialState = {
    albums: [] as Array<albumInterface>,
    photos: [] as Array<photoInterface>
}

const galleryReducer = (state = initialState, action: any): typeof initialState => {
    switch (action.type) {
        case SET_ALBUMS:
            return {
                ...state,
                albums: [...action.albums]
            }
        case SET_PHOTOS:
            return {
                ...state,
                photos: [...action.photos]
            }
        default: return state
    }
}

type actionTypes = setAlbumsActionInterface | setPhotosActionInterface 

interface setAlbumsActionInterface {
    type: typeof SET_ALBUMS,
    albums: Array<albumInterface>
}

interface setPhotosActionInterface {
    type: typeof SET_PHOTOS,
    photos: Array<photoInterface>
}

type thunkType = ThunkAction<Promise<void>, appStateType, any, actionTypes>

const setAlbumsActionCreator = (albums: Array<albumInterface>): setAlbumsActionInterface => 
    ({type: SET_ALBUMS, albums: albums})

const setPhotosActionCreator = (photos: Array<photoInterface>): setPhotosActionInterface => 
    ({type: SET_PHOTOS, photos: photos})

export const getAlbumsThunkCreator = (): thunkType => async (dispatch: Dispatch<actionTypes>) => {
    let response = await galleryAPI.getAlbums()
    dispatch(setAlbumsActionCreator(response.data))
}

export const getPhotosThunkCreator = (): thunkType => async (dispatch: Dispatch<actionTypes>) => {
    let response = await galleryAPI.getPhotos()
    dispatch(setPhotosActionCreator(response.data))
}

export default galleryReducer
