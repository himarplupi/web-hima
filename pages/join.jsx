import Head from 'next/head'
import React, { Fragment } from 'react'

const Join = () => {
  return (
    <Fragment>
      <Head>
        <title>Home | HIMA RPL</title>
        <meta
          name='description'
          content='Home page of Himpunan Mahasiswa Rekayasa Perangkat Lunak (HIMA RPL)'
        />
      </Head>

      <main className='w-full flex flex-col gap-y-5'>
        <iframe className='w-full max-h-screen mt-20' src="https://docs.google.com/forms/d/e/1FAIpQLSe_nMeEEnkaRaAW5IJ_OASUuyTqYmkxWC4eyE6BraWThfrQ2Q/viewform?embedded=true" width="640" height="1077" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
      </main>
    </Fragment>
  )
}

export default Join