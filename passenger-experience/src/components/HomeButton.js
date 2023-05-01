import React from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

export default function HomeButton() {
    const navigate = useNavigate();

    const goHome = () => {
        navigate('/');
    };
    
    return(
        <div>
        <Button className='m-2' style={{float: 'right'}} onClick={goHome}>Return to Home</Button>{' '}
        </div>
    )
}