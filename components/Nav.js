import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Nav() {
    const linkToPortfolio = "https://0xjosiah.xyz"

    return (
        <div className={styles.description}>
            <p>
                <Link href="/">Home</Link>
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
    )
}