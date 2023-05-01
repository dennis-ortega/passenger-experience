import  React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';
import CardGroup from 'react-bootstrap/CardGroup';

export default function ProductTable ({productType}) {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:8080/products?productType=${productType}`, {
            method: 'GET'
          })
            .then((response) => {
              if (response.status === 200) {
                return response.json()
                    .then((data) => {
                        setProducts(data);
                        return;
              });
              } else if (response.status === 400) {
                return response.json()
                  .then((data) => {
                    return { errors: data.messages };
                  });
              } else {
                return { errors: ['Unexpected error'] };
              }
            })
    }, [productType]);

    useEffect(() =>{
    }, [products])

    return (
        <div>     
            {products && products.length > 0 &&       
            <CardGroup>
                {products.map((product, index) => {
                    return <ProductCard key={index} description={product.description} price ={product.price} title={product.name} />
                })}
            </CardGroup>     
            }
        </div>
    )
};