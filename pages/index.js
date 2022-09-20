import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <div style={{display:'flex','justify-content': 'center','align-items': 'center','flex-direction': 'column', textAlign:'center'}}>
        <img src='undercons.jpg' width={'400px'}/>
        <h1 style={{color:'#E63946', fontFamily:'fangsong'}}>Under Construction</h1>
        <h2 style={{ fontFamily:'fangsong'}}>Contact: jitendra@irasoft.in</h2>
      </div>
    </div>
  )
}
