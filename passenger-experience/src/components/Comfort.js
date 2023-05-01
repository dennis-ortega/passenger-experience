import { React } from 'react';

import ProductTable from './ProductTable';
import HomeButton from './HomeButton';

export default function Comfort() {
    return (
            <div>   
                <h1 className='text-center text-white'>Comfort Options 🎮</h1>
                <ProductTable productType={'COMFORT'}/>
                <HomeButton />
            </div>
    )
}