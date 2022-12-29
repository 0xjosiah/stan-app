import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const linkToPortfolio = "https://0xjosiah.xyz" // TODO fill in portfolio link

  return (
    <>
      <Head>
        <title>Stan</title>
        <meta name="description" content="the decentralized ticketing solution" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.description}>
          <p>
            Get started by creating some tickets
          </p>
          <div>
            <a
              href={linkToPortfolio}
              target="_blank"
              rel="noopener noreferrer"
            >
              By{' '}
              <p>0xjosiah</p>
            </a>
          </div>
        </div>

        {/* <div className={styles.center}> */}
          {/* <Image
            className={styles.logo}
            src="/next.svg"
            alt="Next.js Logo"
            width={180}
            height={37}
            priority
          /> */}
          {/* <div className={styles.thirteen} */}
          {/* className=""> */}
            {/* <Image
              src="/thirteen.svg"
              alt="13"
              width={40}
              height={31}
              priority
            /> */}
            {/* <button>Get Started</button> */}
          {/* </div> */}
        {/* </div> */}

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
