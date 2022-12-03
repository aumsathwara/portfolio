import React from 'react';
import { projects } from '../constants';
import styles, {layout} from '../style';

const FeatureCard = ( {icon, title, content, index}) => (
  <div className={`flex flex-row p-6 rounded-[20px] ${index !== projects.length - 1 ? "mb-6" : "mb-9"} feature-card`}>
    <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}> 
      <img src={icon} alt="icon" className='w-[50%] h-[50%] object-contian'/>
    </div>
      <div className='flex-1 flex flex-col ml-3'>
        <h4 className='font-poppins font-semibold text-white text-[18px] leading-[23px] mb-1'>
          {title}
        </h4>
        <p className='font-poppins font-normal text-dimWhite text-[16px] leading-[24px] mb-1'>
          {content}
        </p>
      </div>
  </div>
)
const Projects = () => {
  return (
    <section id="projects" className={layout.section}>
        <h1 className='font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100px] leading-[75px]'> 
         Projects 
        
        
      <div className={`${layout.sectionImg} flex justify-center  items-center`}>
          {projects.map((feature, index) => (
            <FeatureCard key={feature.id} {...feature} index={index} />
          ))}
      </div> 
    </h1>

    </section>
  )
}

export default Projects