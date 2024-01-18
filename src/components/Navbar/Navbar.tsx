import { SelectPage } from '@/shared/Types'
import useMediaQuery from '@/shared/useMediaQuery'
import Image from 'next/image'
import React from 'react'
import Link from './LInk'
import styles from "./page.module.css"

type Props = {
  isTopOfPage: boolean,
  setSelectedPage: (value: SelectPage) => void,
  selectedPage: string,
}

const Navbar = ({
  isTopOfPage,
  selectedPage,
  setSelectedPage
}: Props) => {
  const isAboveMediumScreen = useMediaQuery("(min-width: 1060px");

  console.log(isTopOfPage)

  return (
    <nav className={`${styles.container} ${!isTopOfPage && styles.scrollActive}`}>
      <div className={styles.navBar}>
        <Image src="/Logo.png" alt="logo" width={115} height={34} />
        <div className={styles.navItems}>
          <Link page="Home" selectPage={selectedPage} setSelectedPage={setSelectedPage}/>
          <Link page="Destinations" selectPage={selectedPage} setSelectedPage={setSelectedPage}/>
          <Link page="Hotel" selectPage={selectedPage} setSelectedPage={setSelectedPage}/>
          <Link page="Flight" selectPage={selectedPage} setSelectedPage={setSelectedPage}/>
          <Link page="Bookings" selectPage={selectedPage} setSelectedPage={setSelectedPage}/>
        </div>
        <div className={styles.actionBtn}>
          <p>Login</p>
          <p className={styles.mainBtn}>Sign up</p>
        </div>
      </div>
    </nav>
  )
}

export default Navbar