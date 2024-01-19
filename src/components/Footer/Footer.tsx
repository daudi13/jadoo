import Image from 'next/image'
import React from 'react'
import styles from "./page.module.css"
import { FaFacebook } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";

type Props = {}

const Footer = (props: Props) => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div>
          <p className={styles.logo}>Jadoo.</p>
          <p className={styles.content}>
            Book your trip in minute, get full Control for much longer.
          </p>
        </div>
        <div className={styles.box}>
          <p className={styles.title}>Company</p>
          <p className={styles.links}>About</p>
          <p className={styles.links}>Careers</p>
          <p className={styles.links}>Mobile</p>
        </div>
        <div className={styles.box}>
          <p className={styles.title}>Contact</p>
          <p className={styles.links}>Help/FAQ</p>
          <p className={styles.links}>Press</p>
          <p className={styles.links}>Affiliates</p>
        </div>
        <div className={styles.box}>
          <p className={styles.title}>More</p>
          <p className={styles.links}>Airline fees</p>
          <p className={styles.links}>Airline</p>
          <p className={styles.links}>Low fares</p>
        </div>
        <div className={styles.lastbox}>
          <div className={styles.icons}>
            <FaFacebook className={styles.icon} />
            <FaSquareInstagram className={styles.icon} />
            <FaTwitter className={styles.icon} />
          </div>
          <p className={styles.discover}>Disover your apps</p>
        <div className={styles.downloadApps}>
          <Image alt="props" src="/GooglePlay.png" width={107} height={35} />
          <Image alt="props" src="/PlayStore.png" width={107} height={35} />
        </div>
        </div>
      </div>
      <p className={styles.copyright}>All rights reserved &copy;David Ouma</p>
    </footer>
  )
}

export default Footer