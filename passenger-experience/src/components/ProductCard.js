import  React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import headphones from '../img/headphones.png';
import gaming from '../img/gaming.png';
import streaming from '../img/streaming.png';
import neckPillow from '../img/neckPillow.png';
import blanket from '../img/blanket.png';
import sleepMask from '../img/sleepMask.png';
import OrderModal from './OrderModal';


export default function ProductCard({description, price, title }) {         
  const [img, setImg] = useState(headphones);
  const [showOrderModal, setShowOrderModal] = useState(false);

  const displayOrderModal = () => {
    setShowOrderModal(true);
  };

  const hideOrderModal = () => {
    setShowOrderModal(false);
  }

  useEffect(() =>{
    switch(title){
        case 'Headset':
            setImg(headphones);
            break;
        case 'Gaming':
            setImg(gaming);
            break;
        case 'Video Streaming':
            setImg(streaming);
            break;
        case 'Neck Pillow':
            setImg(neckPillow);
            break;
        case 'Blanket':
            setImg(blanket);
            break;
        case 'Sleep Mask':
            setImg(sleepMask);
            break;
        default:
            break;
    }
  }, [title]);

  return (
    <div>
    <Card className='text-center' style={{ width: '30rem'}}>
      <Card.Img style={{ height: '25rem'}} src={img} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Subtitle className='mb-2 text-muted'>${price}</Card.Subtitle>
        <Card.Text>
          {description}
          {' '}
        </Card.Text>
        <Button variant='primary' onClick={displayOrderModal}>Order</Button>
      </Card.Body>
    </Card>
    <OrderModal hideModal={hideOrderModal} showModal={showOrderModal} purchaseName={title} price={price}/>
    </div>
  );
}