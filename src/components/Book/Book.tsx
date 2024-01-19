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

type Props = {}

const Book = (props: Props) => {
  return (
    <section id={SelectPage.Bookings} className={styles.booking}>
      <div className={styles.right}>
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
      </div>
      <div className={styles.card}>
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
      </div>
    </section>
  )
}

export default Book