import { OfferItems, SelectPage } from '@/shared/Types';
import React from 'react';
import styles from "./page.module.css";
import Image from 'next/image';
import { MdOutlineSatelliteAlt } from "react-icons/md";
import { FaPlaneDeparture } from "react-icons/fa";
import { ImCog } from "react-icons/im";
import { MdEventAvailable } from "react-icons/md"


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

type Props = {}

const Offers = (props: Props) => {
  return (
    <section id={SelectPage.Offers} className={styles.offerWrapper}>
      <h4 className={styles.semiTitle}>category</h4>
      <h1 className={styles.title}>We offer the Best Services</h1>
      <div className={styles.boxes}>
        {
          offerData.map((item: OfferItems, index: number) => {
            return (
              <div key={index} className={styles.box}>
                <div>{item?.icon}</div>
                <h4 className={styles.boxTitle}>{item?.title}</h4>
                <p className={styles.content}>{item?.content}</p>
              </div>
            )
          })
        }
      </div>
    </section>
  )
}

export default Offers