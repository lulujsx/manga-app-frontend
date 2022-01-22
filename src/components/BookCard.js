import { Card } from 'react-bootstrap'
import {Link} from 'react-router-dom'
import './BookCard.css'

export default function BookCard({obj}) {
    return (
        <div>
            <Card className="bookCard" style={{ width: '18rem' }}>
                <img src={obj.image} />
                <Card.Body>
                    <Card.Title>{obj.title}</Card.Title>
                    <Card.Text>
                        {obj.author}
                    </Card.Text>
                    <Link className="btn btn-outline-primary" to={`/book/${obj._id}`}>
                        Ver más
                    </Link>
                </Card.Body>
            </Card>
        </div>
    )
}
