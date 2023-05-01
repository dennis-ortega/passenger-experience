import  React from 'react';

import ProductTable from './ProductTable';
import HomeButton from './HomeButton';

export default function Entertainment() {
    return (
        <div>   
            <h1 className='text-center text-white'>Entertainment Options 🎮</h1>
            <ProductTable productType={'ENTERTAINMENT'}/>
            <HomeButton />
        </div>
    )
}