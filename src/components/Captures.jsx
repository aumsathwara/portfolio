import React from 'react';
import { Photos } from '../constants';
import {layout} from '../style';


const FeatureCard = ( {icon, title, content, index}) => (
  <div className={`flex flex-row p-6 rounded-[20px] ${index !== Photos.length - 1 ? "mb-6" : "mb-9"} feature-card`}>
    {/* <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}> 
      <img src={icon} alt="icon" className='w-[50%] h-[50%] object-contian'/>
    </div> */}
      <div className='flex-1 flex flex-col ml-3'>
        <h4 className='font-poppins font-semibold text-white text-[18px] leading-[23px] mb-1'>
          {icon} <br /><br />
          {title}
        </h4>
        <p className='font-poppins font-normal text-dimWhite text-[16px] leading-[24px] mb-1'>
          {content}
        </p>
      </div>
  </div>
)
const Captures = () => {
  return (
    <section id="Photos" className={layout.section}>
        <h1 className='font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100px] leading-[75px]'> 
         Captures 
        
    {/* <div className='absolute z-[2]  w-[20%] h-[50%] rounded-full white__gradient'/> */}
    <div className='absolute z-[0] -left w-[50%] h-[50%] rounded-full red__gradient '/>
        
      <div className={`${layout.sectionImg} flex justify-cente items-center z-[1]`}>
          {Photos.map((feature, index) => (
            <FeatureCard key={feature.id} {...feature} index={index} />
          ))}
      </div> 
    </h1>

    </section>
  )
}

export default Captures