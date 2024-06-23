"use client"
import React from 'react'
import dynamic from 'next/dynamic';

const ReactPlayer = dynamic(() => import('react-player'), { ssr: false });

function BloqueDiezyNueve() {

    return (
        <div className='min-h-screen min-w-screen flex flex-col items-center justify-center md:px-24 max-md:flex-wrap max-md:h-full gap-5'>
            <div className='flex w-full gap-3 max-md:flex-wrap max-md:justify-center max-md:items-center max-md:gap-3'>
                <ReactPlayer width="320px" height="180px" url={`https://youtu.be/Jirn2y_h4xA`} />
                <ReactPlayer width="320px" height="180px" url={`https://youtu.be/5mIJ4_8gSnE`} />
                <ReactPlayer width="320px" height="180px" url={`https://youtu.be/u3JA3sjY5TU`} />
                <ReactPlayer width="320px" height="180px" url={`https://youtu.be/xzFn7oiiWBY`} />
            </div>
            <div className='flex w-full gap-3 max-md:flex-wrap max-md:justify-center max-md:items-center max-md:gap-3'>
                <ReactPlayer width="320px" height="180px" url={`https://youtu.be/xdjEs4zu70w`} />
                <ReactPlayer width="320px" height="180px" url={`https://youtu.be/ySumupwX8y8`} />
                <ReactPlayer width="320px" height="180px" url={`https://youtu.be/bj4s87Dm-e0`} />
                <ReactPlayer width="320px" height="180px" url={`https://youtu.be/3sRcxlHCGBg`} />
            </div>
            <div className='flex w-full gap-3 max-md:flex-wrap max-md:justify-center max-md:items-center max-md:gap-3'>
                <ReactPlayer width="320px" height="180px" url={`https://youtu.be/6RljFv9pvOA`} />
                <ReactPlayer width="320px" height="180px" url={`https://youtu.be/Jirn2y_h4xA`} />
                <ReactPlayer width="320px" height="180px" url={`https://youtu.be/5mIJ4_8gSnE`} />
                <ReactPlayer width="320px" height="180px" url={`https://youtu.be/xzFn7oiiWBY`} />
            </div>
        </div>
    )
}

export default BloqueDiezyNueve