import React from 'react';
import Feature from '../Feature/Feature';
const PriceCard = ({price}) => {
    
        const shoot = () => {
          alert(`Great! You are now a ${price.name} member.Enjoy your journey with GymMates :)`);
        }
    return (
        <div className='bg-purple-300 rounded-md m-4 p-2 flex flex-col'>
            <h2 className='text-center'>
            <span className='text-5xl pt-4 font-extrabold text-purple-700'>${price.price}</span>
            <span className='text-2xl font-bold'>/month</span>
            </h2>
            <h5 className='text-2xl font-bold text-center'>{price.name}</h5>
            <p className='underline font-bold text-white'>Features:</p>
            <div>
            {
                // price.features.map(feature=> <li>{feature}</li>)
                price.features.map((feature,idx)=> <Feature
                feature={feature}
                key={idx}
                ></Feature>)
            }
            <button onClick={shoot} className='md:mt-auto w-full font-bold bg-cyan-500 py-2 rounded-md text-white hover:bg-cyan-600'>Buy Now</button>
            </div>
        </div>
    );
};

export default PriceCard;