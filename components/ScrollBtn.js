import React from "react";
import Button from './Button';

const ScrollBtn = (props) => {
    return (
        <Button attr={{ id: 'endofpage' }} classes='text-lg fixed top-5 right-48 z-[99] text-center align-center'>
            <span className="relative before:absolute before:rounded-full before:top-2 before:left-2.5 block h-12 border-2 rounded-full w-7 anim-scroll-to-explore before:content-[''] before:w-1 before:h-2"></span>
        </Button>
    );
};

export default ScrollBtn;