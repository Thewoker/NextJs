import React from 'react'

function Presentation() {
    return (
        <main className='container m-auto py-10 '>
            <h2 className='text-center'><i>Welcome to TWEB LABS - Your Partner in Digital Success.</i></h2>
            <section className=''>
                <article className='block py-0'>
                    <div className='block md:flex justify-center items-center mobile1'>
                        <p className='md:w-1/2 p-4 text-md px-20 highlight-text'>
                            At TWEB LABS, we specialize in website design and digital marketing services. Our team of experts is dedicated to creating exceptional websites for digital businesses, including e-commerce platforms and landing pages.
                        </p>
                        <div className='hidden md:block md:w-1/2 px-4 py-1'>
                            <img className="" src="/imgs/Description-1.jpg" alt="" />
                        </div>
                    </div>
                </article>
                <article className='block py-0'>
                    <div className='block md:flex justify-center items-center mobile2'>
                        <div className='hidden md:block md:w-1/2 px-4 py-1'>
                            <img className="" src="/imgs/Description-2.jpg" alt="" />
                        </div>
                        <p className='md:w-1/2 p-4 text-md px-20 highlight-text'>
                            With our expertise in web development, we ensure that your website not only looks visually appealing but also performs seamlessly across all devices. We understand the importance of user experience and create websites that engage and convert visitors into customers.
                        </p>
                    </div>
                </article>
                <article className='block py-0'>
                    <div className='block md:flex justify-center items-center mobile3'>
                        <p className='md:w-1/2 p-4 text-md px-20 highlight-text'>
                            Whether you are starting a new digital business or looking to enhance your online presence, TWEB LABS is here to help. Our tailored solutions and strategic approach will ensure that your website stands out from the competition and drives results. Contact us today to get started on your digital success journey.
                        </p>
                        <div className='hidden md:block md:w-1/2 px-4 py-1'>
                            <img className="" src="/imgs/Description-3.jpg" alt="" />
                        </div>
                    </div>
                </article>
            </section>
        </main>
    )
}

export default Presentation