import Header from '@/components/Header'
import React from 'react'
import Head from 'next/head'
import Footer from '@/components/Footer'

const GuestPage = () => {
    return (
        <>
        <Head>
            <title>Guests</title>
        </Head>
        <Header active="guests"/>
        <Footer/>
        </>
    )
}

export default GuestPage;