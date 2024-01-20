import { Destination, SelectPage } from '@/shared/Types'
import React from 'react'
import styles from "./page.module.css";
import Image from 'next/image';
import { FaLocationArrow } from "react-icons/fa6";
import { motion } from 'framer-motion';

const destinationData: Array<Destination> = [
  {
    img: "/Rome.jpg",
    destinations: "Rome, Italy",
    price: "$5.42k",
    duration: "10 Days Trip"
  },
  {
  img: "/kenya.jpg",
  destinations: "Maasai Mara, Kenya",
  price: "$6.42k",
  duration: "12 Days Trip"
  },
  {
    img: "/beach.jpg",
    destinations: "New Zealand",
    price: "$15k",
    duration: "28 Days Trip"
  },
]

type Props = {
  setSelectedPage: (value: SelectPage) => void
}

const Destinations = ({setSelectedPage}: Props) => {
  return (
    <motion.section
      className={styles.offerWrapper}
      id={SelectPage.Hotel}
      onViewportEnter={() => setSelectedPage(SelectPage.Hotel)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }} transition={{ delay: 0.3, duration: 0.7 }} variants={{
      hidden: { opacity: 0, scale: 0.4, y: -100 },
      visible: {opacity:1, scale: 1,  y: 0}
      }}
    >
      <h4 className={styles.semiTitle}>Top Selling</h4>
      <h1 className={styles.title}>Top Destinations</h1>
      <div className={styles.boxes}>
        {
          destinationData.map((item: Destination, index: number) => {
            return (
              <div key={index} className={styles.box}>
                <div className={styles.imgContainer} style={{backgroundImage: `url(${item?.img})`}}>
                </div>
                <div className={styles.bottomSection}>
                  <div className={styles.priceBox}>
                    <p className={styles.text}>{item?.destinations}</p>
                    <p className={styles.text}>{item?.price}</p>
                  </div>
                  <div className={styles.bottom}>
                    <FaLocationArrow />
                    <p className={styles.trip}>{item?.duration}</p>
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>
    </motion.section>
  )
}

export default Destinations