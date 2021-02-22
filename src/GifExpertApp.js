import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const GifExpertApp = ({defaultCategories=[]}) => {
    const [categories, setCategories] = useState(defaultCategories);
    const handleClearCategory = ()=>{
        setCategories([]);
    }
    return (
        <>
            <h2>GifExpertApp</h2>
            <button className="btn-clear" onClick={handleClearCategory}>Limpiar búsquedas</button>
            <hr />
            <AddCategory setCategories={setCategories} />
            <div>
                {categories.map(category => (
                    <GifGrid
                        key={category}
                        category={category}
                    />))}
            </div>
        </>
    )
}

export default GifExpertApp
