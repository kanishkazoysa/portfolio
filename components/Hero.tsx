import React from 'react';
import { Spotlight } from './ui/Spotlight';
import { TextGenerateEffect } from './ui/TextGenerateEffect';
import MagicButton from './ui/MagicButton';
import { FaLocationArrow } from 'react-icons/fa';

const Hero = () => {
    return (
        <div className='pb-20 pt-36'>
            <div>
                <Spotlight className='-top-40 -left-10 md:-left-32 md:-top-20 h-screen' fill='white' />
                <Spotlight className='top-10 left-full h-[80vh] w-[50vw]' fill='purple' />
                <Spotlight className='top-28 left-80 h-[80vh] w-[50vw]' fill='blue' />
            </div>

            <div className="h-screen w-full dark:bg-black-100 bg-white  
                dark:bg-grid-white/[0.03] bg-grid-black/[0.2]  flex 
                items-center justify-center absolute top-0 left-0">
                <div className="absolute pointer-events-none inset-0
                flex items-center justify-center dark:bg-black-100 bg-white 
                [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
            </div>

            <div className='flex flex-row w-full'>
                <div className='flex relative my-20 z-10 flex-1 w-full md:w-1/3 text-center lg:text-left'> {/* Center-align text */}
                    <div className='max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col'>
                        <div className='space-y-1 mb-10'> {/* Container to reduce vertical gap */}
                            <TextGenerateEffect
                                className='text-[30px] md:text-3xl lg:text-4xl'
                                words='Hi, I m Kanishka'
                            />
                            <TextGenerateEffect
                                className='text-[20px] md:text-1xl lg:text-2xl'
                                words='A Full Stack Developer'
                            />
                        </div>
                        <TextGenerateEffect
                            className='text-[30px] md:text-5xl lg:text-6xl'
                            words='Transforming Concepts into User Experience'
                        />
                        <a href='#about'>
                            <MagicButton
                                title="Show my work"
                                icon={<FaLocationArrow />}
                                position='right'
                            />
                        </a>
                    </div>
                </div>
                <div className='hidden md:flex relative my-20 z-10 flex-1 w-2/3'> {/* Hide on small devices */}
                    {/* Content here */}
                </div>
            </div>
        </div>
    );
}

export default Hero;