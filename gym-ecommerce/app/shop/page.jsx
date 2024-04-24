"use client"
import React from 'react'
import Link from 'next/link'
import "./shop.css"
import { Slider, Input } from "@nextui-org/react";
import {SearchIcon} from "@/public/shop/SearchIcon";
import ItemShopCard from '@/components/shop/ItemShopCard';

function Page() {
    return (
        <div className='flex flex-col min-w-full h-full min-h-screen justify-center items-center '>
            <div className='w-full'>
                <div className='bg-img-shop flex justify-center items-center h-[70vh] p '>
                    <h1 className='shop-title text-white'>Tienda</h1>
                </div>
                <div className='flex max-lg:flex-col px-[10%] py-20'>
                    <div className='flex flex-col max-lg:flex-row max-lg:w-full max-lg:px-10 max-lg:py-3 gap-3 w-[20vw]'>
                        <Input
                            classNames={{
                                base: "max-w-full sm:max-w-[10rem] h-10",
                                mainWrapper: "h-full",
                                input: "text-small",
                                inputWrapper: "h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20",
                            }}
                            placeholder="Buscar"
                            size="sm"
                            startContent={<SearchIcon size={18} />}
                            type="search"
                        />
                        <Slider
                            label="Filtra por precio"
                            step={50}
                            minValue={0}
                            maxValue={1000000}
                            defaultValue={[1, 1000000]}
                            formatOptions={{ style: "currency", currency: "ARS" }}
                            className="max-w-md"
                        />
                        <ul>
                            {}
                            <li></li>
                        </ul>
                    </div>
                    <div className='px-5 flex flex-wrap gap-y-10 justify-between max-xl:justify-around'>
                        <Link href="/shop/proteina-en-polvo"><ItemShopCard/></Link>
                        <Link href="/shop/proteina-en-polvo"><ItemShopCard/></Link>
                        <Link href="/shop/proteina-en-polvo"><ItemShopCard/></Link>
                        <Link href="/shop/proteina-en-polvo"><ItemShopCard/></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Page