import { FC } from 'react'
import { albumInterface } from '../../types/types'
import Album from './Album/Album'
import './Gallery.css'

interface propsInterface {
    albums: Array<albumInterface>
}

const Gallery: FC<propsInterface> = (props) => {
    return (
        <div className="galleryWrap">
            <div className="gallery">
                <div className="galleryHead">
                    <p>Галерея</p>
                    <p style={{fontSize: '0.8em'}}>({props.albums.length} альбомов)</p>
                </div>
                <div className="albums">
                    {props.albums.map(album => {
                        return (
                            <Album 
                                userId={album.userId}
                                key={album.id}
                                id={album.id}
                                title={album.title}
                            />
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Gallery