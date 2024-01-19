import React from 'react'
import styles from "./page.module.css"

type Props = {}

const Subscribe = (props: Props) => {
  return (
    <section className={styles.subscribeContainer}>
      <p className={styles.subscribeText}>Subscribe to get information, latest news and other interesting offers about Cobham</p>
      <form className={styles.form}>
        <input className={styles.input} placeholder='Your email' type='email' />
        <button type='submit' className={styles.orangeBtn}>Subscribe</button>
      </form>
    </section>
  )
}

export default Subscribe