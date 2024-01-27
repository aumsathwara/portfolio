import React from 'react'
import styles from '../style'
import { hand, rectangle, rectangle2, rectangle3, rectangle4, profile_picture } from '../assets'
import Typewriter from 'typewriter-effect'

const Button1 = ({styles}) => {
  return (
   <button type='button' className={'py-4 px-6 mr-4 mb-4 bg-blue-gradient font-poppins font-medium text-teal-50 rounded-full'}>
      <a type="submit" href="https://drive.google.com/file/d/1QlpBzjF1FLnz2dYDejSzBg_P8CO2Wzhu/view?usp=sharing">Resume</a>
    </button>
  )
}

const Button2 = ({styles}) => {
  return (
   <button type='button' className={'py-4 px-6 mr-4 mb-4 bg-blue-gradient font-poppins font-medium text-teal-50 rounded-full'}>
      <a type="submit" href="https://drive.google.com/file/d/12Pdgj2qdKBjZNok2I-2okM7ucWi-sg8l/view?usp=share_link">Curriculum vitae</a>
    </button>
  )
}

const Hero = () => (

    <section id="home" className={` flex py-20 md:flex-row flex-col ${styles.paddingY}`}>
        <img src={rectangle} alt="blur-asset" className='w-[20%] sd:h-[30%] left-[20%] top-[90%] absolute z-[0] floating' />
        <img src={rectangle2} alt="blur-asset" className='w-[29%] sd:h-[60%] left-[0%] top-[0%] absolute z-[0] floating' />
        <img src={rectangle3} alt="blur-asset" className='w-[19%] sd:h-[40%] h-[40%] left-[50%] top-[55%] absolute z-[0] floating' />
        <img src={rectangle4} alt="blur-asset" className='w-[20%] sd:h-[25%] left-[72%] top-[0%] absolute z-[0] floating' />
        
      <div className={`py-20 x1:px-0 sm:px-16 px-6`}>
       
        <div className='flex flex-row justify-between items-center w-full'>
          <h1 className='flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100px] leading-[75px] z-[1]'>Hey, I am Aum 
          <h1 className='flex font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100px] leading-[75px] w-full'>& I love </h1>
          {/* <span id="change" className='text-gradient'> </span> {" "}   */}
          <h1 className=' font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100px] leading-[75px] text-gradient'>  
          <Typewriter
              options={{
                strings: ['Coding', 'Reading', 'Taking photos', 'Painting'],
                autoStart: true,
                loop: true,
                skipAddStyles:true,
              }}
            />
          </h1>
          </h1>
        </div>    
          <p className={`${styles.paragraph} max-w-[470px] mt-5 z-[1]`}>Scroll through the website to get to know me and my work! </p>
        <br />

        <div className="button">
          <Button1 /> <Button2 /> 
        </div>   
      </div>
      
      
     <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
        <img id="profile_icon" src={profile_picture} alt="billing" className='w-[90%] h-[90%] releative z-[2]'/>
        <div className='absolute z-[0] w-[40%] h-[35%] top-[30%] left-[30%] pink__gradient'></div>
        {/* <div className='absolute z-[1] w-[80%] h-[80%] rounded-full bottom-40 white__gradient'></div> */}
        <div className='absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient'></div>
      </div>

    </section>
  )


export default Hero