import Header from '@/components/Header'
import React from 'react'
import Head from 'next/head'
import Footer from '@/components/Footer'

const ReceptionPage = () => {
    return (
        <>
        <Head>
            <title>Reception info</title>
        </Head>
        <Header active="reception"/>
        <Footer/>
        </>
    )
}

export default ReceptionPage;