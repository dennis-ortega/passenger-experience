import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export default function OrderModal({hideModal, showModal, purchaseName, price}) {
 const [completedPurchase, setCompletedPurchase] = useState(false);

  useEffect(() =>{
  }, [purchaseName, price, showModal, completedPurchase]);
        
  const handleClose = () => {
    setCompletedPurchase(false);
    hideModal()
   } ;

  const handlePurchase = () => {
    fetch(`http://localhost:8080/products/purchase`, {
        method: 'POST',
        body: {
            purchaseName
        }
      })
        .then((response) => {
          if (response.status === 201) {
            setCompletedPurchase(true);
            return;
          } else if (response.status === 400) {
            return response.json()
              .then((data) => {
                return { errors: data.messages };
              });
          } else {
            return { errors: ['Unexpected error'] };
          }
        })
  };

  return (
    <>
      <Modal
        show={showModal}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title className='text-center'>Purchasing Confirmation</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {completedPurchase ? 'Successful Purchase! ✅' :
          `You are about to purchase ${purchaseName} for $${price}. Do you want to continue?`
         }
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          {
            !completedPurchase && 
            <Button variant="primary" onClick={handlePurchase}>Purchase</Button>
          }
        </Modal.Footer>
      </Modal>
    </>
  );
}
