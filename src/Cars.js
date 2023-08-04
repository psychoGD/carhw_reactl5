import React, { useState } from 'react'
import Data, { carDatas } from './Data';

export default function Cars(cars) {
    return (
        <div>
            {
                cars.cars.map(c=><li>{c.model}-{c.vendor}-{c.price} <img style={{width:"250px",heigth:"250px"}} alt='masin sekli' src={c.imageUrl}/></li>)
            }
        </div>
    )
}
