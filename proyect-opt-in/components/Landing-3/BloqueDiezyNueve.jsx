"use client"
import React from 'react'
import dynamic from 'next/dynamic';

const ReactPlayer = dynamic(() => import('react-player'), { ssr: false });

function BloqueDiezyNueve() {

    return (
        <div className='min-h-screen min-w-screen flex flex-col items-center justify-center md:px-24 max-md:flex-wrap max-md:h-full gap-5'>
            <div className='flex w-full gap-3 max-md:flex-wrap max-md:justify-center max-md:items-center max-md:gap-3'>
                <ReactPlayer width="320px" height="180px" url={`https://www.youtube.com/watch?v=YmI_f3vIlt8`} />
                <ReactPlayer width="320px" height="180px" url={`https://www.youtube.com/watch?v=YmI_f3vIlt8`} />
                <ReactPlayer width="320px" height="180px" url={`https://www.youtube.com/watch?v=YmI_f3vIlt8`} />
                <ReactPlayer width="320px" height="180px" url={`https://www.youtube.com/watch?v=YmI_f3vIlt8`} />
            </div>
            <div className='flex w-full gap-3 max-md:flex-wrap max-md:justify-center max-md:items-center max-md:gap-3'>
                <ReactPlayer width="320px" height="180px" url={`https://www.youtube.com/watch?v=YmI_f3vIlt8`} />
                <ReactPlayer width="320px" height="180px" url={`https://www.youtube.com/watch?v=YmI_f3vIlt8`} />
                <ReactPlayer width="320px" height="180px" url={`https://www.youtube.com/watch?v=YmI_f3vIlt8`} />
                <ReactPlayer width="320px" height="180px" url={`https://www.youtube.com/watch?v=YmI_f3vIlt8`} />
            </div>
            <div className='flex w-full gap-3 max-md:flex-wrap max-md:justify-center max-md:items-center max-md:gap-3'>
                <ReactPlayer width="320px" height="180px" url={`https://www.youtube.com/watch?v=YmI_f3vIlt8`} />
                <ReactPlayer width="320px" height="180px" url={`https://www.youtube.com/watch?v=YmI_f3vIlt8`} />
                <ReactPlayer width="320px" height="180px" url={`https://www.youtube.com/watch?v=YmI_f3vIlt8`} />
                <ReactPlayer width="320px" height="180px" url={`https://www.youtube.com/watch?v=YmI_f3vIlt8`} />
            </div>
        </div>
    )
}

export default BloqueDiezyNueve