import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <div style={{display:'flex','justify-content': 'center','align-items': 'center','flex-direction': 'column'}}>
        <img src='undercons.jpg' width={'500px'}/>
        <h1 style={{color:'#E63946', fontFamily:'fangsong'}}>Thanks for visiting, IraSoft will be live soon...</h1>
        <h2 style={{fontFamily:'fangsong'}}>Stay tuned!!</h2>
        <h3>Contact: jitendra@IraSoft.in/ruchi@IraSoft.in</h3>
      </div>
    </div>
  )
}
