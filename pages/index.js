import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Digital Designer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Digital Designer
        </h1>

        <p className={styles.description}>
          We build your business idea{' '}
          
        </p>

        <div className={styles.grid}>
          <div className={styles.card}>
            <h3>Business Website</h3>
            <p>Get a website to represent your brand</p>
          </div>

      <div className={styles.card}>
            <h3>E-commerce Website</h3>
            <p>Get a website to sell your products</p>
          </div>

        <div className={styles.card}>
            <h3>Portfolio Website</h3>
            <p>Get a website to showcase your talent</p>
         
    </div>
          
       
       <div className={styles.card}> 
          
            <h3>Nonprofit Website</h3>
            <p>
              Get a website for a social services
            </p>
         </div> 
        </div>
      </main>

      <footer className={styles.footer}>
        
        
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
       
      </footer>
    </div>
  )
}
