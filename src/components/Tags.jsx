import Badge from 'react-bootstrap/Badge';
import './Tags.css'

export const Tags = ({ badge_nombre, badge_color }) => {
    return (
        <>
            <Badge bg={badge_color} className='tag'>
                {badge_nombre}
            </Badge>
        </>

    )
}
