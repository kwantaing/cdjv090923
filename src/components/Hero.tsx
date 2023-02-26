import React from 'react'
import Image from 'next/image'

const Hero = () => {
    const img1 = require("../../public/images/IMG_0115.JPG");
    return (
        <div>
            <div id="hero" className='w-full flex'>
                <div id="img_div" className='m-auto w-full max-h-[50vh] overflow-hidden'>
                    <Image src={img1} alt="hero_image" />
                </div>
            </div>
        </div >
    )
}

export default Hero;