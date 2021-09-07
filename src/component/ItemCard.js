import React from 'react';

const ItemCard = (props) => {
    return (

        <div className='col-11 col-md-6 col-lg-3 mx-0 mb-4'>
            <div className='card p-0 overflow-hidden h-100 shadow text-center'>
            <img style={{height:'120px'}} src={props.img} className='card-img-top img-fluid' alt='..'/>
            <div className='card-body'>
                <h5 className='card-title'>{props.title}</h5>
                <p className='card-text mb-0'>{props.desc}</p>
                <h4 className='card-text'>$ {props.price}</h4>
                <button className='btn btn-primary'>Add to Cart</button>
            </div>
        </div>
        </div>
            
    );
};

export default ItemCard;