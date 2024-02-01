import React from 'react';
import { Photos } from '../constants';
import {layout} from '../style';
// import { handleHateClick, handleLoveClick } from '../constants';

const FeatureCard = ( {icon, url, content, index}) => (
  <div>
    {/* <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}> 
      <img src={icon} alt="icon" className='w-[50%] h-[50%] object-contian'/>
    </div> */}
      {/* <div className='flex-1 flex flex-col ml-3'> */}
          <img src ={url} className={`flex flex-row p-6 rounded-[20px] ${index !== Photos.length - 1 ? "mb-6" : "mb-9"} feature-card`}/>
        {/* <p className='font-poppins font-normal text-dimWhite text-[16px] leading-[24px] mb-1'>
          {content}
        </p> */}
      {/* </div> */}
  </div>
)



const Captures = () => {

  return (
    <section id="Photos" className={layout.section}>
      <h1 className='font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100px] leading-[75px]'> 
      Captures 
        
      <div className='absolute z-[2]  w-[20%] h-[50%] rounded-full white__gradient'/>
      <div className='absolute z-[0] -left w-[50%] h-[50%] rounded-full red__gradient '/>
          
      <div className={`${layout.sectionImg1} flex justify-cente items-center z-[1]`}>

        {Photos.map((photo, index) => (
            <FeatureCard key={photo.id} {...photo}  /> 
            // index={index}

          ))}
          
      </div> 
      </h1>        
      

    </section>
  )
}


export default Captures



