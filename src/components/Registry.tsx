import React from 'react'

const Registry = () => {
    return (
        <section id="registry" className='h-80'>
            <h1 className="text-4xl">
                Registry
            </h1>
            <div className="flex h-3/4">
                <div className="space-x-6 m-auto">
                    <button className=' p-2 text-xl h-16 min-w-50 border-2 border-textgold bg-darkgreen bg-opacity-85 hover:bg-opacity-100 hover:scale-105 hover:shadow-xl transition-all'>Amazon</button>
                    <button className=' p-2 text-xl h-16 min-w-50 border-2 border-textgold bg-darkgreen bg-opacity-85 hover:bg-opacity-100 hover:scale-105 hover:shadow-xl transition-all'>Crate and Barrel</button>
                    <button className=' p-2 text-xl h-16 min-w-50 border-2 border-textgold bg-darkgreen bg-opacity-85 hover:bg-opacity-100 hover:scale-105 hover:shadow-xl transition-all'>PayPal</button>
                </div>
            </div>
        </section>
    )
}

export default Registry;