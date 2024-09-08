import React from 'react';

const MagicButton = ({ title, icon, position, handleClick, otherClasses }: {
    title: string,
    icon: React.ReactNode,
    position: string,
    handleClick?: () => void;
    otherClasses?: string;
}) => {
    return (
        <button 
            className={`magic-button relative inline-flex h-12 w-full overflow-hidden rounded-lg p-[1px] focus:outline-none md:w-60 md:mt-10 ${otherClasses}`} 
            onClick={handleClick}
        >
            <span className="magic-button-bg absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
            <span className="magic-button-content inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-slate-950 px-3 py-1 text-sm font-medium text-white">
                {position === 'left' && <span className="icon mr-2">{icon}</span>}
                <span className="magic-button-text whitespace-nowrap">{title}</span>
                {position === 'right' && <span className="icon ml-2">{icon}</span>}
            </span>
        </button>
    );
};

export default MagicButton;