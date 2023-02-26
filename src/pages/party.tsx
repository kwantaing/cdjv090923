import Header from '@/components/Header'
import React from 'react'
import Head from 'next/head'
import Party from '@/components/Party'
import Footer from '@/components/Footer'

const PartyPage = () => {
    return (
        <>
        <Head>
            <title>Party Information</title>
        </Head>
        <Header active="party"/>
        <Party/>
        <Footer/>
        </>
    )
}

export default PartyPage;