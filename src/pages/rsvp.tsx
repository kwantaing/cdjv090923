import React from 'react'
import Head from 'next/head'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const RSVPage = () => {
    return (
        <>
            <Head>
                <title>RSVP</title>
            </Head>
            <Header active="rsvp"/>
            <Footer/>
        </>
    )
}

export default RSVPage;