import React, { useState } from 'react'
import Data, { carDatas } from './Data';

export default function Cars() {
    const [cars,setCars] = useState(carDatas);
    return (
        <div>
            {
                cars.map(c=><li>{c.model}-{c.vendor}-{c.price} <img style={{width:"250px",heigth:"250px"}} alt='masin sekli' src={c.imageUrl}/></li>)
            }
        </div>
    )
}
