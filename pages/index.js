import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <img src='undercons.jpg' width={'500px'}/>
    </div>
  )
}
