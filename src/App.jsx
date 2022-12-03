import React from 'react'
import styles from './style';
import { Navbar, Captures, Projects, Contact, Footer, Hero} from './components';

const App = () => (
  <div className="bg-black-gradient w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>

    <div className={`bg-black-gradient ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>
    <div className={`bg-black-gradient ${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Projects />
        <Captures/>
        <Contact />
        <Footer /> 
      </div>
    </div>

  </div>
);

export default App