import React from 'react'
import Hero from '../components/Hero'
import FilosofiLogo from '../components/kabinet/FilosofiLogo'
import Team from '../components/kabinet/Team'
import { KabinetProvider } from '../components/logo/context/KabinetContext'

const Kabinet = () => {
  return (
    <>
      <KabinetProvider>
        <Hero title={'Kabinet Explora'} />
        <FilosofiLogo />
        <Team />
      </KabinetProvider>
    </>
  )
}

export default Kabinet