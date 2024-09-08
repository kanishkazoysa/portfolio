"use client";
import React, { useEffect } from 'react';
import { Spotlight } from './ui/Spotlight';
import { TextGenerateEffect } from './ui/TextGenerateEffect';
import MagicButton from './ui/MagicButton';
import { FaLocationArrow } from 'react-icons/fa';
import CustomAnimatedButton from './ui/MagicButton';

const Hero = () => {
    return (
        <div className='pb-20 pt-32 relative'>
            <div>
                <Spotlight className='-top-40 -left-10 md:-left-32 md:-top-20 h-screen' fill='white' />
                <Spotlight className='top-10 left-full h-[80vh] w-[50vw]' fill='purple' />
                <Spotlight className='top-28 left-80 h-[80vh] w-[50vw]' fill='blue' />
            </div>

            <div className="h-screen w-full dark:bg-black-100 bg-white  
                dark:bg-grid-white/[0.03] bg-grid-black/[0.2] flex 
                items-center justify-center absolute top-0 left-0">
                <div className="absolute pointer-events-none inset-0
                flex items-center justify-center dark:bg-black-100 bg-white 
                [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
            </div>

            <div className='flex flex-col lg:flex-row w-full '>
                <div className='flex relative z-10 flex-1 w-full lg:w-1/3 text-center lg:text-left'> {/* Center-align text */}
                    <div className='max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] lg:ml-20 flex flex-col'>
                        <div className='space-y-1 mb-5'> {/* Container to reduce vertical gap */}
                {/* Profile ring for small devices */}
                <div className='flex md:hidden justify-center items-center w-full mt-20 mb-20'>
                    <div className="circle mb-10">
                        <div className="ring"></div>
                        <div className="outer-ring"></div>
                        <div className="logo"></div>
                    </div>
                </div>
                            <TextGenerateEffect
                                className='text-[30px] md:text-3xl lg:text-4xl'
                                words='Hi, I am Kanishka'
                            />
                            <TextGenerateEffect
                                className='text-[20px] md:text-1xl lg:text-1xl'
                                words='A Full Stack Developer'
                            />
                        </div>
                        <TextGenerateEffect
                            className='text-[30px] md:text-4xl lg:text-5xl'
                            words='Transforming Concepts into User Experience'
                        />
                        <a href='#about'>
                        <CustomAnimatedButton
                                title="Show my work"
                                icon={<FaLocationArrow />}
                                iconPosition='right'
                                className="mt-4 lg:w-1/3 "
                                borderColors={['#E2CBFF', '#393BB2', '#E2CBFF']}
                                backgroundColor="bg-slate-950"
                                textColor="text-white"
                            />
                        </a>
                    </div>
                </div>


                <div className='hidden md:flex relative my-20 z-10 flex-1 w-full lg:w-2/3 justify-center items-center flex-col'> {/* Hide on small devices */}
                    <div className="circle mb-10">
                        <div className="ring"></div>
                        <div className="outer-ring"></div>
                        <div className="logo"></div>
                    </div>
                    {/* Description Section */}
                    <div className='mt-20 w-3/5'>
                        <p className='text-sm md:text-base lg:text-sm text-justify glass-text'>
                        I am an undergraduate of University of Moratuwa , eager to leverage my academic knowledge and practical skills 
                        in real-world scenarios. With a strong foundation in software engineering and proven leadership experience, 
                        adaptable and collaborative, focused on meeting organizational goals to be a professional person.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;