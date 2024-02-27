import React from 'react'
import Head from "next/head.js"


function PageHead({ metaTitle }) {
    return (
        <Head>
            <meta name="robots" content="follow, index" />
            <title>{metaTitle}</title>
            <meta content="I'm a Software Engineer" name="description" />
            <meta property="og:type" content="website" />
            <meta property="og:site_name" content="Alwin Paul" />
            <meta
                property="og:description"
                content="A frontend developer"
            />
            <meta property="og:title" content={metaTitle} />
        </Head>
    )
}

export default PageHead