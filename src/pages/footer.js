'use client'
import Image from 'next/image'
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function Footer() {
    const router = useRouter();
  return (
    <div className='w-8/12 h-40 items-center flex justify-center relative shrink'>
       <div className='flex flex-col w-full h-full gap-5'>
            <div className='w-20 h-10 flex items-center'>
                <img src='https://merchant.monpay.mn/stat/images/candy-logo.png' className='w-10 h-10'/>
                <p className='text-center text-xs font-light'>мерчант</p>
            </div>
            <div className='h-0.5 w-full bg-gradient-to-r from-purple-600 to-indigo-600'></div>
            <div className='w-full h-1/2 flex justify-between'>
                <div className='text-sm font-light'>©2020 - Powered by MobiFinance. All rights reserved.</div>
                <div className=''>
                    {/* Logonuud fontawesome holbood oruulah */}
                </div>
            </div>
       </div>
    </div>
  )
}
