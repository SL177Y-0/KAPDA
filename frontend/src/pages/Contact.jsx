import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const Contact = () => {
  return (
    <div>
      
      <div className='text-center text-2xl pt-10 border-t'>
          <Title text1={'CONTACT'} text2={'IN'} />
      </div>

      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28'>
        <img className='w-full md:max-w-[480px]' src={assets.contact_img} alt="" />
        <div className='flex flex-col justify-center items-start gap-6'>
          <p className='font-semibold text-xl text-gray-600'>Our Store</p>
          <p className=' text-gray-500'>RISHI RAWAT <br /> SHAITAN GALI, KHATRA MAHEL <br /> GALI NUMBER 420, ANDHER NAGAR, SHAMSHAN KE SAAMNE</p>
          <p className=' text-gray-500'>Tel: +919280085420 <br /> Email: sl177y.log0@gmail.com</p>
          <p className='font-semibold text-xl text-gray-600'>Careers at KAPDA</p>
          <p className=' text-gray-500'>Learn more about our teams and job openings which is not available at all.</p>
          <button className='border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500'>Explore Jobs</button>
        </div>
      </div>

      <NewsletterBox/>
    </div>
  )
}

export default Contact
