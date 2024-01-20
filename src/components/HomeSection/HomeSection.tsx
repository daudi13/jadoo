import React from 'react'
import styles from "./page.module.css"
import { SelectPage } from '@/shared/Types'
import Image from 'next/image'
import { PlayCircleIcon } from '@heroicons/react/24/solid'
import { motion } from 'framer-motion';

type Props = {
  setSelectedPage: (value: SelectPage) => void
}

const HomeSection = ({setSelectedPage}: Props) => {
  return (
    <motion.section className={styles.home} id={SelectPage.Home} onViewportEnter={() => setSelectedPage(SelectPage.Home)}>
      <motion.div className={styles.left}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.5 }} transition={{ delay: 0.3, duration: 0.7 }} variants={{
      hidden: { opacity: 0, x: -100 },
      visible: {opacity:1, x: 0}
      }}
      >
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
      </motion.div>
      <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.5 }} transition={{ delay: 0.3, duration: 0.8 }} variants={{
      hidden: { opacity: 0, x: 100 },
      visible: {opacity:1, x: 0}
        }}
      >
      <Image src="/Traveller.png" alt="smiling traveller girl" className={styles.imageMain} width={765} height={764} />
      </motion.div>
    </motion.section>
  )
}

export default HomeSection
