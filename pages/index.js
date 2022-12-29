import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Nav from '../components/Nav'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  return (
    <>
      <Head>
        <title>Stan</title>
        <meta name="description" content="the decentralized ticketing solution" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Nav />
        <div className={styles.grid}>
          <div className={styles.card} >
            <Link className={inter.className} href="/ticketCreatorPage">
              Create Tickets <span>-&gt;</span>
            </Link>
          </div>
          <div className={styles.card} >
            <Link className={inter.className} href="/ticketsForSalePage">
              View Tickets <span>-&gt;</span>
            </Link>
          </div>
        </div>
      </main>
    </>
  )
}
