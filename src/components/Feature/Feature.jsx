import React from 'react';
import { CheckCircleIcon } from '@heroicons/react/24/solid';

const Feature = ({feature}) => {
    return (
        <div className='flex gap-1'>
            <CheckCircleIcon className='h-6 w-6 text-black'/>
            <span>
                {feature}
            </span>
        </div>
    );
};

export default Feature;
