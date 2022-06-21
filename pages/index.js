import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Header from './header'
import Footer from './footer'
import Banner from './components/banner'

export default function Home() {
  return (
    <div className={styles.container}>
      <Banner/>
        <div className='spacer'></div>
    </div>
  )
}
