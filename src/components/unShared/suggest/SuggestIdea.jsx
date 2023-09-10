import React from 'react';
import Container from '../../../Container';
import { Button } from '@nextui-org/react';

const SuggestIdea = () => {
    return (
        <div className='bg-gray-100'>
            <Container>
                <div className="py-20 flex-row lg:flex md:flex sm:flex-row justify-between items-center">
                    <div className="space-y-7">
                        <h3 className="text-6xl w-3/4 font-semibold">
                            The ideal solution for your business
                        </h3>
                        <p className='text-xl w-3/4'>Get the world-class learning and development chosen by top organizations across the globe. All on Coursera for Business. You also can push your video content right this website in WEB NEST.

                        </p>
                        <Button color='primary'>Discover Coursera for Business</Button>
                        <p className='font-medium'>Upskill a small team? <a href="" className='text-blue-600 font-semibold'>Check out Web Nes for Teams --</a></p>
                    </div>
                    <div className="">
                        <img src="/public/image.png" alt="" />
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default SuggestIdea;