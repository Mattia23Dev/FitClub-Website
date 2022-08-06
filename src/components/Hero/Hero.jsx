import React from 'react'
import './Hero.css'
import Header from '../Header/Header'
import heart from '../../assets/heart.png'
import hero_image from '../../assets/hero_image.png'
import hero_image_back from '../../assets/hero_image_back.png'
import Calories from '../../assets/calories.png'
import{motion} from 'framer-motion';
import NumberCounter from 'number-counter';

const Hero = () => {
   const transition = {type: 'spring', duration: 3}
   const mobile = window.innerWidth <= 768 ? true: false;

  return (
    <div className='hero' id='home'>
        <div className="blur blur-h"></div>
        <div className='left-h'>

            <Header />

            <div className='the-best-ad'>
                <motion.div
                initial={{left: mobile? '140px' : '238px'}}
                whileInView={{left : '8px'}}
                transition={{...transition, type: 'tween'}}>
                </motion.div>
                <span>The best fitness club in the Town</span>
            </div>

            <div className='hero-text'>
                <div>
                    <span className='stroke-text'>Shape </span>
                    <span>your</span>
                </div>
                <div>
                    <span>Ideal body</span>
                </div>
                <div>
                    <span>In here we will help you to shape and build your ideal body and live up your life to fullest</span>
                </div>
            </div>

            <div className='figures'>
                <div>
                    <span><NumberCounter end={140} start={90} delay='4' preFix='+' /></span>
                    <span>expert coaches</span>
                </div>
                <div>
                    <span><NumberCounter end={978} start={750} delay='4' preFix='+' /></span>
                    <span>members joined</span>
                </div>
                <div>
                    <span><NumberCounter end={50} start={0} delay='4' preFix='+' /></span>
                    <span>fitness programs</span>
                </div>
            </div>

            <div className='hero-buttons'>
               <button className='btn'>Get Started</button>
               <button className='btn'>Learn More</button>
            </div>
        </div>
        <div className='right-h'>
            <button className='btn'>Join Now</button>

            <motion.div className='heart-rate'
            whileInView={{right: '4rem'}}
            transition={transition}
            initial={{right: '1rem'}}>
                 <img src={heart} alt="" />
                 <span>Heart Rate</span>
                 <span>116 bpm</span>
            </motion.div>

            <img src={hero_image} alt="" className='hero-image' />
            <motion.img 
            whileInView={{right: '20rem'}}
            transition={transition}
            initial={{right: '11rem'}}
            src={hero_image_back} alt="" className='hero-image-back' />

            <motion.div className="calories"
            whileInView={{right: '28rem'}}
            transition={transition}
            initial={{right: '37rem'}}>
                <img src={Calories} alt="" />
                <div>
                    <span>Calories Burned</span>
                    <span>220 kcal</span>
                </div>
            </motion.div>
        </div>
    </div>
  )
}

export default Hero