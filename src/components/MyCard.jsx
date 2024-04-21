import { Tags } from "./Tags"
import './MyCard.css'

export const MyCard = ({ nombre, url, descripcion, badge_nombre, badge_color}) => {
    return (
        <>
            <div className="card">
                <img src={url} alt="" />
                <h2>{nombre}</h2>
                <p>{descripcion}</p>
                <Tags badge_nombre={badge_nombre} badge_color={badge_color} />
            </div>
        </>
    )
}
