import Head from 'next/head'
import React from 'react'

const Seo = ({ title }) => {
    return (
        <Head>
            <title>{title}</title>
            <meta name="description" content={title} />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
    )
}

export default Seo
