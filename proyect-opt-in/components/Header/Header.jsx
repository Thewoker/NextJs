import React from 'react'

function Header() {
    return (
        <header class="bg-[#1a1da0] py-4 absolute top-0 w-full ">
            <div class="container mx-auto flex justify-center items-center relative">
                <svg width="80" height="80" viewBox="0 0 90 90" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M71.25 52.5V28.125L52.5 15L33.75 28.125V33.75H26.25V24.375L52.5 5.625L78.75 24.375V52.5H71.25ZM54.375 30H58.125V26.25H54.375V30ZM46.875 30H50.625V26.25H46.875V30ZM54.375 37.5H58.125V33.75H54.375V37.5ZM46.875 37.5H50.625V33.75H46.875V37.5ZM52.5 84.375L26.25 77.0625V82.5H3.75V41.25H33.5625L56.8125 49.875C58.875 50.625 60.5475 51.9375 61.83 53.8125C63.11 55.6875 63.75 57.75 63.75 60H71.25C74.375 60 77.0312 61.0313 79.2188 63.0938C81.4062 65.1563 82.5 67.875 82.5 71.25V75L52.5 84.375ZM11.25 75H18.75V48.75H11.25V75ZM52.3125 76.5L74.625 69.5625C74.4375 68.875 74.015 68.3587 73.3575 68.0137C72.7025 67.6712 72 67.5 71.25 67.5H53.25C51.3125 67.5 49.5625 67.375 48 67.125C46.4375 66.875 44.75 66.4375 42.9375 65.8125L36.4688 63.5625L38.625 56.4375L46.125 58.875C47.25 59.25 48.5625 59.5312 50.0625 59.7188C51.5625 59.9062 53.625 60 56.25 60C56.25 59.3125 56.0475 58.6562 55.6425 58.0312C55.235 57.4062 54.75 57 54.1875 56.8125L32.25 48.75H26.25V69.375L52.3125 76.5Z" fill="white" />
                </svg>
                <h1 class="text-white text-2xl font-bold philosopher">JuanInmobiliario360</h1>
                <img src="/imgs/landing-3/logo.png" className='w-[6%] absolute right-5 ' alt="" />
            </div>
        </header>
    )
}

export default Header