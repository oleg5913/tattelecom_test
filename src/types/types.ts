// types for users

interface geoAdressUserInterface {
    lat: string,
    lng: string
}

interface adressUserInterface {
    street: string,
    suite: string,
    city: string,
    zipcode: string,
    geo: geoAdressUserInterface
}

interface companyUserInterface {
    name: string,
    catchPhrase: string,
    bs: string
}

export interface userInterface {
    id: number,
    name: string,
    username: string,
    email: string,
    adress: adressUserInterface,
    phone: string,
    website: string,
    company: companyUserInterface
}

// types for gallery

export interface albumInterface {
    userId: number,
    id: number,
    title: string
}

export interface photoInterface {
    albumId: number,
    id: number,
    title: string,
    url: string,
    thumbnailUrl: string
}

// types for posts

export interface postInterface {
    userId: number,
    id: number,
    title: string,
    body: string
}

export interface myPostInterface {
    id: number,
    text: string
}