import React from 'react'
import styles from '../style'
import { hand, rectangle, rectangle2, rectangle3, rectangle4 } from '../assets'

const Hero = () => (
    <section id="home" className={` flex md:flex-row flex-col ${styles.paddingY}`}>
      <div className={`flex-1 ${styles.flexStart} flex-col x1:px-0 sm:px-16 px-6`}>
      <img src={rectangle} alt="blur-asset" className='w-[20%] sd:h-[30%] left-[20%] top-[90%] absolute z-[0] floating' />
        <img src={rectangle2} alt="blur-asset" className='w-[29%] sd:h-[60%] left-[0%] top-[0%] absolute z-[0] floating' />
        <img src={rectangle3} alt="blur-asset" className='w-[19%] sd:h-[40%] h-[40%] left-[50%] top-[55%] absolute z-[0] floating' />
        <img src={rectangle4} alt="blur-asset" className='w-[20%] sd:h-[25%] left-[72%] top-[0%] absolute z-[0] floating' />
        
        <div className='flex flex-row justify-between items-center w-full '>
          <h1 className='flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100px] leading-[75px] z-[1]'>Hi, I am Aum 
          <h1 className='font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100px] leading-[75px] w-full'>& I love to </h1>
          <span id="change" className='text-gradient'> </span> {" "}
          </h1>
          <div className='ss:flex hidden md:mr-4 mr-0'>
            {/* get started */}
          </div>
        </div>

        
        <p className={`${styles.paragraph} max-w-[470px] mt-5 z-[1]`}>Scroll through the website to get to know me and my work! 
        </p>
      </div>
      
      <div className={`flex-1 flex ${styles.flexCente} md:my-0 my-10 relative`}>
        <img src={hand} alt="billing" className='w-[100%] h-[100%] releative z-[5]' />
        
        <div className='absolute z-[0] w-[40%] h-[35%] top-[30%] left-[30%] pink__gradient'></div>
        {/* <div className='absolute z-[1] w-[80%] h-[80%] rounded-full bottom-40 white__gradient'></div> */}
        <div className='absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient'></div>
      </div>

    </section>
  )


export default Hero