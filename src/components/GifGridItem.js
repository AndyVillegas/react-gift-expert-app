import React from 'react'

export const GifGridItem = ({id, title, url}) => {

    return (
        <div className="card">
            <img src={url} alt={title.length>0?title:'h'}/>
            <div>{title.length>0?title:'No title'}</div>
        </div>
    )
}
