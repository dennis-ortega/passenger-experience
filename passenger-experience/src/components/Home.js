import { React } from 'react';
import { Link } from 'react-router-dom'
import CardGroup from 'react-bootstrap/CardGroup';
import { Card } from 'react-bootstrap';
import entertainment  from '../img/entertainment.png'
import comfort from '../img/comfort.png';

export default function Home() {
    return (
        <div>
            <h1 className='text-center text-white'>Prepare for Your First-Class Next Passenger Experience! 🛫</h1>
            <CardGroup>
                <Card style={{ width: '18rem'}} className='text-center'>
                    <Card.Img variant='top' style={{ height: '25rem'}} src={entertainment} />
                    <Card.Body>
                        <Link to='/entertainment'>See Entertainment Options</Link>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }} className='text-center'>
                    <Card.Img variant='top' style={{ height: '25rem'}} src={comfort} />
                    <Card.Body>
                        <Link to='/comfort'>See Comfort Options</Link>
                    </Card.Body>
                </Card>
            </CardGroup>
        </div>
    )
}
