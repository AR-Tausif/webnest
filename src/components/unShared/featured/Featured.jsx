import { Button } from '@nextui-org/react';

import React from 'react';
import Container from '../../../Container';

const Featured = () => {
    return (
        <div className='bg-blue-200'>
            <Container>
                <div className="flex-row lg:flex md:flex sm:flex-row justify-center items-center gap-20">
                    <img src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/wp1lcwdav1p1/6xXERT0XZPJDXgjPzr8Bve/d858e0cda1a5e5df2cb8accd65d5c1b7/outcomes.png?auto=format%2Ccompress&dpr=1&w=606&h=553&q=40" alt="" />
                    <div className="space-y-10">
                        <h3 className='text-5xl font-semibold'>Learner outcomes on Coursera
                        </h3>
                        <p className='w-2/4 text-lg'> <b> 87% of people learning </b> for professional development <b> report career benefits, </b> including outcomes like getting a promotion, becoming better at their current job, and finding a new job. Coursera Impact Report (2020)
                        </p>
                        <Button color='primary'>Join with free</Button>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Featured;