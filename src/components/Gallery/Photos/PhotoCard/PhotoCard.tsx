import { FC } from 'react'
import './PhotoCard.css'

interface propsInterface {
    src: string
}

const PhotoCard: FC<propsInterface>  = (props) => {
    return (
        <div className="photo" style={{backgroundImage: `url(${props.src})`}}></div>
    )
}

export default PhotoCard