import React from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {

    const {data:images, loading} = useFetchGifs(category);

    return (
        <>
        <h3>{category}</h3>
        {loading && <div className="loading">Cargando...</div>}
        <div className="card-container animate__animated animate__fadeInLeft">
            {
                images.map(image => (
                    <GifGridItem
                        key={image.id}
                        {...image}
                    />
                ))
            }
        </div>
        </>
    )
}
