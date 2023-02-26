import React from 'react'
import Link from 'next/link';

type AppProps = {
    active: string
}

const Header = ({ active }: AppProps) => {
    const scrollTo = (section: string) => {
        let ele = document.getElementById(section);
        let topPos: any = ele?.offsetTop;
        window.scrollTo({ top: topPos-160, behavior: 'smooth' });
    }
    return (
        <div className='h-[140px]'>
            <header className='fixed top-0 z-10 w-full h-[140px] bg-darkgreen p-2 px-5 text-center shadow-2xl '>
                <div className="logo mt-6">
                    <Link href="/">
                        <h1 className='text-4xl '>Constancia & Jerrod</h1>
                    </Link>
                    <div id="menu" className='w-full flex mt-6'>
                        <ul className="flex space-x-5 m-auto font-semibold ">
                            <div onClick={() => scrollTo('story')}>
                                <li className={`${active == "story" ? 'underline' : null} scale-95 opacity-90 hover:opacity-100 hover:cursor-pointer hover:scale-100 transition-all duration-400`}>Our Story</li>
                            </div>
                            <div onClick={() => scrollTo('party')}>
                                <li className={`${active == "party" ? 'underline' : null} scale-95 opacity-90 hover:opacity-100 hover:cursor-pointer hover:scale-100 transition-all duration-400`}>Wedding Party</li>
                            </div>
                            <div onClick={()=>scrollTo('schedule')}>
                                <li className={`${active == "schedule" ? 'underline' : null} scale-95 opacity-90 hover:opacity-100 hover:cursor-pointer hover:scale-100 transition-all duration-400`}>Schedule</li>
                            </div>
                            <div onClick={()=>scrollTo('registry')}>
                                <li className={`${active == "registry" ? 'underline' : null} scale-95 opacity-90 hover:opacity-100 hover:cursor-pointer hover:scale-100 transition-all duration-400`}>Registry</li>
                            </div>
                            <div onClick={()=>scrollTo('rsvp')}>

                                <li className={`${active == "rsvp" ? 'underline' : null} scale-95 opacity-90 hover:opacity-100 hover:cursor-pointer hover:scale-100 transition-all`}>RSVP</li>
                            </div>
                        </ul>
                    </div>
                </div>
            </header>
        </div>
    )
}

export default Header;