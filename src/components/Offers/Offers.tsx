import { OfferItems, SelectPage } from '@/shared/Types';
import React from 'react';
import styles from "./page.module.css";
import { MdOutlineSatelliteAlt } from "react-icons/md";
import { FaPlaneDeparture } from "react-icons/fa";
import { ImCog } from "react-icons/im";
import { MdEventAvailable } from "react-icons/md"
import { motion } from "framer-motion";


const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.4}
  }
}

const childVariant = {
  hidden: { opacity: 0, scale: 0.5, y: 100 },
  visible: {opacity: 1, scale: 1, y:0}
}



const offerData: Array<OfferItems> = [
  {
    icon: <MdOutlineSatelliteAlt className={styles.icon} />,
    title: "Calculated Weather",
    content: "Built Wicket longer admire do barton vanity itself do in it."
  },
  {
    icon: <FaPlaneDeparture className={styles.icon}/>,
    title: "Best flights",
    content: "Engrossed listening. Park gate sell they west hard for the."
  },
  {
    icon: <MdEventAvailable className={styles.icon}/>,
    title: "Local Event",
    content: "Barton vanity itself do in it. Preferd to men it engrossed listening. "
  },
  {
    icon: <ImCog className={styles.icon}/>,
    title: "Customization",
    content: "We deliver outsourced aviation services for military customers"
  },
]

type Props = {
  setSelectedPage: (value: SelectPage) => void
}

const Offers = ({setSelectedPage}: Props) => {
  return (
    <motion.section id={SelectPage.Offers}
      onViewportEnter={() => setSelectedPage(SelectPage.Offers)}
      className={styles.offerWrapper}>
      <h4 className={styles.semiTitle}>category</h4>
      <h1 className={styles.title}>We offer the Best Services</h1>
      <motion.div className={styles.boxes}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.5 }}
      variants={container}
      >
        {
          offerData.map((item: OfferItems, index: number) => {
            return (
              <motion.div key={index} className={styles.box} variants={childVariant}>
                <div>{item?.icon}</div>
                <h4 className={styles.boxTitle}>{item?.title}</h4>
                <p className={styles.content}>{item?.content}</p>
              </motion.div>
            )
          })
        }
      </motion.div>
    </motion.section>
  )
}

export default Offers