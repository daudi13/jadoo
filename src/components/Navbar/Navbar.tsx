import { SelectPage } from '@/shared/Types'
import useMediaQuery from '@/shared/useMediaQuery'
import Image from 'next/image'
import React, { useState } from 'react'
import Link from './LInk'
import styles from "./page.module.css"
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdCloseCircleOutline } from "react-icons/io";

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
  const isAboveMediumScreen:any = useMediaQuery("(min-width: 1023px");
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false)


  return (
    <>
    <nav className={`${styles.container} ${!isTopOfPage && styles.scrollActive}`}>
      <div className={styles.navBar}>
        <Image src="/Logo.png" alt="logo" width={115} height={34} />
        <div className={styles.navItems}>
          <Link page="Home" selectPage={selectedPage} setSelectedPage={setSelectedPage}/>
          <Link page="Offers" selectPage={selectedPage} setSelectedPage={setSelectedPage}/>
          <Link page="Hotel" selectPage={selectedPage} setSelectedPage={setSelectedPage}/>
          <Link page="Flight" selectPage={selectedPage} setSelectedPage={setSelectedPage}/>
          <Link page="Bookings" selectPage={selectedPage} setSelectedPage={setSelectedPage}/>
        </div>
        <div className={styles.actionBtn}>
          <p>Login</p>
          <p className={styles.mainBtn}>Sign up</p>
        </div>
        <GiHamburgerMenu className={styles.ham} onClick={() => setIsMenuToggled(!isMenuToggled)}/>
        </div>
      </nav>
      {
        !isAboveMediumScreen && isMenuToggled && (
          <div className={styles.navDrawer}>
            <IoMdCloseCircleOutline className={styles.close} onClick={() => setIsMenuToggled(false)}/>
            <div className={styles.linkBox}>
              <div className={styles.linkItems}>
              <Link page="Home" selectPage={selectedPage} setSelectedPage={setSelectedPage}/>
              <Link page="Offers" selectPage={selectedPage} setSelectedPage={setSelectedPage}/>
              <Link page="Hotel" selectPage={selectedPage} setSelectedPage={setSelectedPage}/>
              <Link page="Flight" selectPage={selectedPage} setSelectedPage={setSelectedPage}/>
              <Link page="Bookings" selectPage={selectedPage} setSelectedPage={setSelectedPage}/>
              </div>
            </div>
          </div>
        )
      }
    </>
  )
}

export default Navbar