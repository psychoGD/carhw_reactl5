import { useState } from "react";
import React from 'react'
export const carDatas = [
    {
        id: 1,
        model: "Toyota Camry",
        vendor: "Toyota",
        price: 25000,
        imageUrl: "https://scene7.toyota.eu/is/image/toyotaeurope/toyota-camry-2021-gallery-01-full_tcm-10-2203475?qlt=80&wid=1280&fit=fit,1&ts=1651157703741&resMode=sharp2&op_usm=1.75,0.3,2,0",
    },
    {
        id: 2,
        model: "Honda Civic",
        vendor: "Honda",
        price: 22000,
        imageUrl: "https://arabam-blog.mncdn.com/wp-content/uploads/2018/11/honda-civic-sedan-dizel-otomatik-test-surusu-1-1024x683.jpg",
    },
    {
        id: 3,
        model: "Ford Mustang",
        vendor: "Ford",
        price: 35000,
        imageUrl: "https://hips.hearstapps.com/hmg-prod/images/2022-ford-mustang-shelby-gt500-02-1636734552.jpg?crop=0.845xw:1.00xh;0.0657xw,0&resize=640:*",
    },
    {
        id: 4,
        model: "Chevrolet Tahoe",
        vendor: "Chevrolet",
        price: 40000,
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/2022_Chevrolet_Tahoe_RST%2C_front_3.7.22.jpg/1200px-2022_Chevrolet_Tahoe_RST%2C_front_3.7.22.jpg",
    },
    {
        id: 5,
        model: "BMW X5",
        vendor: "BMW",
        price: 50000,
        imageUrl: "https://media.ed.edmunds-media.com/bmw/x5/2024/oem/2024_bmw_x5_4dr-suv_xdrive50e_fq_oem_1_1600.jpg",
    },
];
export default function Data() {
    const [cars, setCars] = useState(carDatas);

    function AddCar(car) {
        setCars(...cars, car);
    }
}


