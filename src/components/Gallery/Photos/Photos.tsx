import React, { FC } from 'react'
import { RouteComponentProps, withRouter } from 'react-router-dom'
import { photoInterface } from '../../../types/types'
import PhotoCard from './PhotoCard/PhotoCard'
import './Photos.css'

type propsType = RouteComponentProps & {
    photos: Array<photoInterface>
    match: any
}

const Photos: FC<propsType> = (props) => {
        const id = props.match.params.id
        const photos = props.photos.filter(photo => photo.albumId == id)
        return (
            <div className="photosWrap">
                <div className="photos">
                    <div className="photosHead">
                        <p>{photos.length} фотографий</p>
                    </div>
                    <div className="photosContent">
                    {photos.map(photo => {
                        return <PhotoCard
                            src={photo.url}
                        />
                    })}
                    </div>
                </div>
            </div>
        )
    }

export default withRouter(Photos)