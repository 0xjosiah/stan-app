import styles from '../styles/Home.module.css'

export default function Nav() {
    const linkToPortfolio = "https://0xjosiah.xyz"

    return (
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
    )
}