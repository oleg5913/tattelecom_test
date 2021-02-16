import { albumInterface, photoInterface, postInterface, userInterface } from "../types/types";

const { default: axios } = require("axios");

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://jsonplaceholder.typicode.com/'
})

export const usersAPI = {
    getUsers () {
        return instance.get(`users`)
            .then((response: Array<userInterface>) => response)
    }
}

export const postsAPI = {
    getPosts () {
        return instance.get(`posts`)
            .then((response: Array<postInterface>) => response)
    },
    newPost(id: number, body: string) {
        return instance.post(`posts?userId=${1}&id=${id}&title=${"null"}&body=${body}`)
    }
}

export const galleryAPI = {
    getAlbums () {
        return instance.get(`albums`)
            .then((response: Array<albumInterface>) => response)
    },
    getPhotos () {
        return instance.get(`photos`)
            .then((response: Array<photoInterface>) => response)
    }
}