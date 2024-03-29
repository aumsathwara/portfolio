const styles = {
    boxWidth: "xl:max-w-[1280px] w-full",
  
    heading2: "font-poppins font-semibold xs:text-[48px] text-[40px] text-white xs:leading-[76.8px] leading-[66.8px] w-full",
    paragraph: "font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px]",
  
    flexCenter: "flex justify-center items-center",
    flexStart: "flex justify-center items-start",
    styling: " grid grid-cols-1 gap-8 mt-8 2xl:grid-cols-1 lg:mt-16 md:grid-cols-1 lg:grid-cols-3",
    stylingImg: " grid grid-cols-1 gap-8 mt-8 2xl:grid-cols-1 lg:mt-16 md:grid-cols-1 lg:grid-cols-4",
    styling1: "flex items-center mt-6 -mx-2",
  
    paddingX: "sm:px-16 px-6",
    paddingY: "sm:py-16 py-6",
    padding: "sm:px-16 px-6 sm:py-12 py-4",
  
    marginX: "sm:mx-16 mx-6",
    marginY: "sm:my-16 my-6",
  };
  
  export const layout = {
    section: `flex md:flex-row flex-col ${styles.paddingY}`,
    sectionReverse: `flex md:flex-row flex-col-reverse ${styles.paddingY}`,
  
    sectionImgReverse: `flex-1 flex ${styles.flexCenter} md:mr-10 mr-0 md:mt-0 mt-10 relative`,
    sectionImg: `flex-1 flex ${styles.styling} md:ml-10 mr-0 md:mt-0 mt-10 relative`,
    sectionImg1: `flex-1 flex ${styles.stylingImg} md:ml-10 mr-0 md:mt-0 mt-10 relative`,
  
    sectionInfo: `flex-1 ${styles.flexStart} flex-col`,
  };
  
  export default styles;