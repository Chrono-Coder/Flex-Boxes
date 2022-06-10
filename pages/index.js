import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
export default function Home() {
  return (
    <div className={styles.global}>
      <Head>
        <title>Spotify Music Data</title>
        <meta name="description" content="Generated by create next app" />
        
      </Head>     
      <body >
        <nav className={styles.navbar}>
          <div className={styles.container}>
            <div className={styles.logo}>FlexBox</div>
            <ul className={styles.nav}>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>
        </nav>
        <header className={styles.header}>
          <div className={styles.container}>
            <div>
              <h1>Flexbox Crash Course</h1>
              <p> This crash course was created by Brad Traversy to help you learn the
            basics of flexbox. Flexbox is a very important and useful tool in
            CSS.</p>
            </div>
            <img  src="/images/grid.svg"></img>
          </div>
        </header>

        <section className={styles.boxes}>
          <div className={styles.container}>
            <div className={styles.box}>
              <h2>
              Alignment and Space</h2>
              <p>
              A more efficient way to lay out, align and distribute space among
                items in a container
              </p>
            </div>

            <div className={styles.box}>
              <h2>
              Tricky Positioning</h2>
              <p>
              Flexbox usually solves tricky problems including how to position or
              dynamically resize elements on a page
              </p>
            </div>

            <div className={styles.box}>
              <h2>
              Responsive Design</h2>
              <p>
              Flexbox makes building a website layout (and making it responsive!)
              much, much easier
              </p>
            </div>
          </div>
        </section>
        
      </body>
     
      
    </div>
  )
}