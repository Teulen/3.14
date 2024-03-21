'use client'
import Image from 'next/image'
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function Header() {
    const router = useRouter();
  return (
    <div className='w-full h-20 bg-slate-900 items-center flex justify-center relative shrink'>
        <div className='max-sm:w-full sm:w-full md:w-full lg:w-[1000px] xl:w-[1100px] h-full shrink-0 flex items-center relative'>
            <a className='flex w-[16%] h-12 items-center left-0 absolute'>
                <img src={'https://merchant.monpay.mn/stat/images/candy-logo.png'} className='h-full w-12'/>
                <span className='ml-2 text-xl font-light text-slate-100'>мерчант</span>
            </a>

            <div className='w-[70%] lg:w-[80%] xl:w-[70%] h-full justify-between flex items-center max-sm:hidden sm:invisible md:invisible lg:visible xl:visible 2xl:visible absolute right-0'>
                        <a className='w-[12%] h-full flex items-center cursor-pointer justify-center border-b-[3px] border-lime-500 border-opacity-0 hover:border-opacity-100'>
                            <h1 className='text-black dark:text-white text-sm font-light'>Нүүр хуудас</h1>
                        </a>
                        <a className='w-[15%] h-full flex items-center cursor-pointer justify-center border-b-[3px] border-lime-500 border-opacity-0 hover:border-opacity-100'>
                            <h1 className='text-black dark:text-white text-sm font-light'>Монпэйн тухай</h1>
                        </a>
                        <a className='w-[12%] h-full flex items-center cursor-pointer justify-center border-b-[3px] border-lime-500 border-opacity-0 hover:border-opacity-100'>
                            <h1 className='text-black dark:text-white text-sm font-light'>Тусламж</h1>
                        </a>
                        <a className='w-[14%] h-full flex items-center cursor-pointer justify-center border-b-[3px] border-lime-500 border-opacity-0 hover:border-opacity-100'>
                            <h1 className='text-black dark:text-white text-sm font-light'>Онлайн бүртгэл</h1>
                        </a>
                        <button className='py-2 px-6 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-lg'>Нэвтрэх</button>
                        <a className='w-[12%] h-full flex items-center cursor-pointer justify-center border-b-[3px] border-lime-500 border-opacity-0 hover:border-opacity-100'>
                            <h1 className='text-black dark:text-white text-sm font-light'>OPEN API</h1>
                        </a>
                        <a className='w-[16%] h-full flex items-center cursor-pointer justify-center border-b-[3px] border-lime-500 border-opacity-0 hover:border-opacity-100'>
                            <h1 className='text-black dark:text-white text-sm font-light'>МОНПЭЙ МАРКЕТ</h1>
                        </a>
                        <button className='py-2 px-6 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-lg max-sm:visible sm:visible md:visible lg:hidden xl:hidden mr-10'>Нэвтрэх</button>
            </div>
        </div>
    </div>
  )
}
