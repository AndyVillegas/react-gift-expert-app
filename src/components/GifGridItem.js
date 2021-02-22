import React from 'react';
import PropTypes from 'prop-types';

export const GifGridItem = ({title, url}) => {
    return (
        <div className="card">
            <img src={url} alt={title?.length>0?title:'h'}/>
            <div>{title?.length>0?title:'No title'}</div>
        </div>
    )
}
GifGridItem.propTypes = {
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
}