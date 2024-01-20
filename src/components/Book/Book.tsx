import { SelectPage } from '@/shared/Types'
import React from 'react'
import styles from "./page.module.css"
import { RiMapPin2Fill } from "react-icons/ri";
import Image from 'next/image';
import { GiModernCity } from "react-icons/gi";
import { CiHeart } from "react-icons/ci";
import { MdOutlinePayment } from "react-icons/md";
import { FaTaxi, FaLeaf } from "react-icons/fa";
import { CiMap } from "react-icons/ci";
import { FaPaperPlane } from "react-icons/fa6";
import { motion } from 'framer-motion';

type Props = {
  setSelectedPage: (value: SelectPage) => void
}

const Book = ({setSelectedPage}: Props) => {
  return (
    <motion.section
      onViewportEnter={() => setSelectedPage(SelectPage.Bookings)}
      id={SelectPage.Bookings}
      className={styles.booking}>
      <motion.div className={styles.right}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.5 }} transition={{ delay: 0.3, duration: 0.7 }} variants={{
      hidden: { opacity: 0, x: -100 },
      visible: {opacity:1, x: 0}
      }}
      >
        <p className={styles.semiTitle}>Easy and Fast</p>
        <h3 className={styles.sectionTitle}>Book your next trip in 3 easy steps</h3>
        <div className={styles.pointer}>
          <div className={styles.iconBox} style={{backgroundColor: "#f0bb1f"}}><RiMapPin2Fill style={{color: "#fff"}} /></div>
          <div>
            <p className={styles.contentTitle}>Choose destination</p>
            <p className={styles.content}>
              Select your dream destination effortlessly with our intuitive and visually engaging travel app, offering personalized and inspiring options.
            </p>
          </div>
        </div>
        <div className={styles.pointer}>
          <div className={styles.iconBox} style={{backgroundColor: "#f15a2b"}}><MdOutlinePayment style={{color: "#fff"}}/></div>
          <div>
            <p className={styles.contentTitle}>Make payment</p>
            <p className={styles.content}>
              To complete your transaction, kindly proceed to the payment section and securely make your payment using the available options.
            </p>
          </div>
        </div>
        <div className={styles.pointer}>
          <div className={styles.iconBox} style={{backgroundColor: "#006380"}}><FaTaxi style={{color: "#fff"}}/></div>
          <div>
            <p className={styles.contentTitle}>Reach airport on Selected Date</p>
            <p className={styles.content}>
              Ensure a smooth journey by arriving at the airport on your selected date, allowing ample time for check-in and security procedures.
            </p>
          </div>
        </div>
      </motion.div>
      <motion.div className={styles.card}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.5 }} transition={{ delay: 0.3, duration: 0.8 }} variants={{
      hidden: { opacity: 0, y: -100 },
      visible: {opacity:1, y: 0}
        }}
      >
        <Image src="/rectangle17.jpg" width={321} height={161} alt="woman-red-dress" />
        <p className={styles.trip}>Trip to Greece</p>
        <p className={styles.date}>14-29 June | by Robbin joseph</p>
        <div className={styles.icons}>
          <div className={styles.circle}><FaLeaf /></div>
          <div className={styles.circle}><CiMap /></div>
          <div className={styles.circle}><FaPaperPlane /></div>
        </div>
        <div className={styles.bottomSec}>
          <div className={styles.going}>
            <GiModernCity className={styles.cityIcon} />
            <p>24 people going</p>
          </div>
          <CiHeart className={styles.heartIcon} />
        </div>
      </motion.div>
    </motion.section>
  )
}

export default Book