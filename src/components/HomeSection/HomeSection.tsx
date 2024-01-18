import React from 'react'
import styles from "./page.module.css"
import { SelectPage } from '@/shared/Types'
import Image from 'next/image'
import { PlayCircleIcon } from '@heroicons/react/24/solid'

const HomeSection = () => {
  return (
    <section className={styles.home} id={SelectPage.Home}>
      <div className={styles.left}>
        <h3 className={styles.semiTitle}>Best Destinations around the world</h3>
        <h1 className={styles.title}>Travel, <span className={styles.strike}>enjoy</span> and live a new renewed life</h1>
        <p className={styles.heroText}>Embark on a transformative journey where every destination becomes a canvas for joy. Travel, enjoy, and live fully, embracing the beauty of renewed experiences.</p>
        <div className={styles.btnContainer}>
          <button className={styles.findBtn}>Find out More</button>
          <button className={styles.playBtn}>
            <PlayCircleIcon className={styles.play} />
            <p className={styles.playText}>Play Demo</p>
          </button>
        </div>
      </div>
      <Image src="/Traveller.png" alt="smiling traveller girl" width={765} height={764} />
    </section>
  )
}

export default HomeSection
