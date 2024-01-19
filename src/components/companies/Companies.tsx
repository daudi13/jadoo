import Image from 'next/image'
import React from 'react'
import styles from "./page.module.css"
import { SelectPage } from '@/shared/Types'



const Companies = () => {
  return (
    <section className={styles.companies} id={SelectPage.Flight}>
      <h4 className={styles.title}>Our Partner Airline</h4>
      <div className={styles.images}>
        <Image src="/axon.png" alt="axon" width={130} height={132}/>
        <Image src="/jester.png" alt="" width={173} height={110}/>
        <Image src="/expedia.png" alt="expedia" width={162} height={162}/>
        <Image src="/quantas.png" alt='quantas' width={162} height={32} />
        <Image src="/allias.png" alt='allias' width={94} height={21}/>
      </div>
    </section>
  )
}

export default Companies