'use client';

import React from 'react';
import { PinContainer } from './ui/3d-pin';
import { FaLocationArrow } from 'react-icons/fa';
import Link from 'next/link';
import { projects } from '@/data';

interface Project {
    id: number;
    title: string;
    des: string;
    img: string;
    iconLists: string[];
    githubLink?: string;
    liveLink?: string;
}

interface ProjectContentProps {
    title: string;
    des: string;
    img: string;
}

interface IconListProps {
    iconLists: string[];
}

interface GithubLinkProps {
    githubLink?: string;
    handleClick: (e: React.MouseEvent<HTMLAnchorElement>, link: string) => void;
}

const RecentProjects: React.FC = () => {
    const handleGithubClick = (e: React.MouseEvent<HTMLAnchorElement>, link: string) => {
        e.preventDefault();
        e.stopPropagation();
        window.open(link, '_blank', 'noopener,noreferrer');
    };

    return (
        <div className='py-10' id="projects">
            <h1 className='heading text-2xl md:text-4xl'>
                A small selection of {''}
                <span className='text-purple'>recent projects</span>
            </h1>
            <div className='flex flex-wrap items-center justify-center gap-x-20 p-4 gap-y-20 lg:gap-y-0 mt-10'>
                {projects.map(({ id, title, des, img, iconLists, githubLink, liveLink }: Project) => (
                    <div key={id} className='sm:h-[41rem] h-[32rem] lg:min-h-[32.5rem] flex items-center justify-center sm:w-[570px] w-[80vw]'>
                        <PinContainer title={liveLink || githubLink}>
                            {liveLink ? (
                                <Link href={liveLink} passHref legacyBehavior>
                                    <a target="_blank" rel="noopener noreferrer" className="block w-full h-full">
                                        <ProjectContent title={title} des={des} img={img} />
                                    </a>
                                </Link>
                            ) : (
                                <div className="block w-full h-full">
                                    <ProjectContent title={title} des={des} img={img} />
                                </div>
                            )}
                            <div className="flex items-center justify-between mt-7 mb-3">
                                <IconList iconLists={iconLists} />
                                <GithubLink githubLink={githubLink} handleClick={handleGithubClick} />
                            </div>
                        </PinContainer>
                    </div>
                ))}
            </div>
        </div>
    );
};

const ProjectContent: React.FC<ProjectContentProps> = ({ title, des, img }) => (
    <>
        <div className='relative flex items-center justify-center sm:w-[500px] w-[70vw] overflow-hidden sm:h-[40vh] h-[30vh] mb-10'>
            <div className='relative w-full h-full overflow-hidden lg:rounded-3xl bg-[#13162d]'>
                <img src='/bg.png' alt="bg-img" />
            </div>
            <img
                src={img}
                alt={title}
                className='z-10 absolute bottom-0'
            />
        </div>
        <h1 className='font-bold lg:text-1xl md:text-xl text-base line-clamp-1'>
            {title}
        </h1>
        <p className='lg:text-md lg:font-normal font-light text-sm line-clamp-5 text-justify mt-5'>{des}</p>
    </>
);

const IconList: React.FC<IconListProps> = ({ iconLists }) => (
    <div className="flex items-center">
        {iconLists.map((icon, index) => (
            <div
                key={icon}
                className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                style={{
                    transform: `translateX(-${5 * index + 2}px)`,
                }}
            >
                <img src={icon} alt={icon} className="p-2" />
            </div>
        ))}
    </div>
);

const GithubLink: React.FC<GithubLinkProps> = ({ githubLink, handleClick }) => (
    <div className='flex justify-center items-center'>
        {githubLink && (
            <a
                href={githubLink}
                className='flex lg:text-md md:text-xs text-xs text-purple'
                onClick={(e) => handleClick(e, githubLink)}
            >
                Go To GitHub
                <FaLocationArrow className='ms-3' size={12} color='#CBACF9' />
            </a>
        )}
    </div>
);

export default RecentProjects;