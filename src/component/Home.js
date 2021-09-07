import React from 'react';
import ItemCard from './ItemCard';
import Data from './Data';

const Home = () => {
    return (
        <div>
            <h1 className='text-center mt-3'>All Items</h1>
            <section className='container py-4'>
                <div className='row justify-content-center'>
                    {Data.productData.map((items, i)=>{
                        return(
                            <ItemCard img={items.img} title={items.title} desc={items.desc} price={items.price} key={i}/>
                        )
                    })}
                </div>
            </section>
        </div>
    );
};

export default Home;