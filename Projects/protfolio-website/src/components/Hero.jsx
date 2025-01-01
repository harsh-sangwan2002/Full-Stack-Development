import React from 'react'
import { motion } from 'framer-motion'
import { styles } from '../styles'
import ComputerCanvas from './canvas/Computers'

function Hero() {
    return (
        <section className={`relative w-full h-screen mx-auto`}>
            <div
                className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
            >
                <div className='flex flex-col justify-center items-center mt-5'>
                    <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
                    <div className='w-1 sm:h-80 h-40 violet-gradient' />
                </div>

                <div>
                    <h1 className={`${styles.heroHeadText} text-white`}>
                        Hi, I'm <span className='text-[#915EFF]'>Harsh</span>
                    </h1>
                    <p className={`${styles.heroSubText} mt-2 text-white-100`}>
                        I develop Web Applications, Softwares<br className='sm:block hidden' />
                        & much more...
                    </p>
                </div>
            </div>
            <ComputerCanvas />
        </section>
    )
}

export default Hero
