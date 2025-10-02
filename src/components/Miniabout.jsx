import React from 'react'
import Link from "next/link";

const Miniabout = () => {
  return (
    <div className='bg-black px-4 flex justify-center items-center flex-col pb-4'>
        <h1 className='text-3xl font-bold text-white mb-4 text-center pt-8'>
            We are a web design agency in Lagos Nigeria
        </h1>
        <p className='text-white text-center mb-4'>
        At TechXima, we are passionate about crafting exceptional digital experiences that empower businesses to thrive in the online world. As a leading web design agency based in Lagos, Nigeria, we specialize in creating stunning, user-friendly websites and web-applications that captivate audiences and drive results.
        </p>
        <img src="/imgs.png" alt="about" className='w-full h-full rounded mb-8'/>

        <div className='bg-white flex flex-col justify-center items-center'>
            <h1 className='text-2xl mt-3 text-center font-bold md:text-3xl lg:text-5xl mb-4 md:mb-4 lg:mb-6'>Value-Driven Software Solutions</h1>
            <p className='text-black text-center mb-8 px-4 md:textlg'>
                For over 10 years as a web design company in Lagos Nigeria, we have consistently delivered great results for our clients, through high performance user experience. We approach websites through the lens of your target audiences and present your content in the most clean and concise way possible. We are committed to delivering value-driven software solutions that align with your business goals and exceed your expectations.
            </p>
            <Link href="/about" className='bg-black text-white px-6 py-3 rounded-3xl text-lg font-semibold shadow  hover:bg-gray-900 transition mb-8'>
                Learn More  
            </Link>
        </div>
    </div>
  )
}

export default Miniabout