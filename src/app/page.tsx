"use client"

import Image from 'next/image'
import styles from './page.module.css'
import Navbar from '@/components/Navbar/Navbar'
import HomeSection from '@/components/HomeSection/HomeSection'
import Offers from '@/components/Offers/Offers'
import Destinations from '@/components/Destinations/Destinations'
import Book from '@/components/Book/Book'
import Companies from '@/components/companies/Companies'
import Subscribe from '@/components/subscribe/Subscribe'
import Footer from '@/components/Footer/Footer'
import { useEffect, useState } from 'react'
import { SelectPage } from '@/shared/Types'

export default function Home() {
  const [selectedPage, setSelectedPage] = useState<SelectPage>(SelectPage.Home)
  const [isTopOfPage, setIsTopPage] = useState<boolean>(true)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopPage(true)
        setSelectedPage(SelectPage.Home)
      }
      if (window.scrollY !== 0) {
        setIsTopPage(false)
      }
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll)
  }, []);

  return (
    <main>
      <Navbar isTopOfPage={isTopOfPage} selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
      <HomeSection setSelectedPage={setSelectedPage} />
      <Offers setSelectedPage={setSelectedPage}/>
      <Destinations setSelectedPage={setSelectedPage}/>
      <Book setSelectedPage={setSelectedPage}/>
      <Companies setSelectedPage={setSelectedPage}/>
      <Subscribe />
      <Footer />
      <Image src="/Decore.png" alt='props' width={766} height={872} className={styles.background} />
    </main>
  )
}
