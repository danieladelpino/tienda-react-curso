import React from 'react';

const Item = ({item}) => {
    return (
        <div className="item">
            <img src={item.img} alt={item.title} />
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <span>{item.price}</span>
        </div>
    )
}

export default Item;