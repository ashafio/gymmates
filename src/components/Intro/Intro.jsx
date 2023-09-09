import React from 'react';

const Intro = () => {
    return (
        <div className='md:flex justify-between px-12 py-6'>
            <div>
                <h2 className='text-6xl text-red-700 text-center md:pt-10'>Build Your Body,</h2>
                <h4 className='text-3xl text-red-400 text-center'>Transform Your Life.</h4>
                <br /><br />
                <p className='font-bold'>
                    Achieve your fitness goals with our expert trainers and cutting-edge equipment.
                    <br />
                    Join our supportive community for a healthier, stronger you. Let's start your fitness journey today!
                </p>
            </div>
            {/* <div>
                <img className='object-cover md:h-full w-full' src="gym.jpg" alt="" />

            </div> */}

            <div
                className="bg-cover bg-center h-96 md:w-full sm:w-auto"
                style={{
                    backgroundImage: "url('/public/gym.jpg')",
                }}
            ></div>

        </div>
    );
};

export default Intro;