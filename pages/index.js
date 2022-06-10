import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
//import stylesExtra from '../styles/style.module.css'
// /
export default function Home() {
  return (
    <div className={styles.global}>
      <Head>
        <title>Spotify Music Data</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="stylesheet" href="./style.module.css"></link>
        <link rel="stylesheet" href="path/to/font-awesome/css/font-awesome.min.css"></link>
      </Head>
      
      {/* <h1> Spotify Music Data</h1> */}
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
            <img className={styles.image} src="/images/grid.svg" width={600} height={600}></img>
          </div>
        </header>

        <section className={styles.boxes}>
          <div className={styles.container}>
            <div className={styles.box}>
              <h2><i class="fas fa-arrows-alt-v"></i>
              Alignment & Space</h2>
              <p>
              A more efficient way to lay out, align and distribute space among
                items in a container
              </p>
            </div>

            <div className={styles.box}>
              <h2><i class={styles.arrows}></i>
              Tricky Positioning</h2>
              <p>
              Flexbox usually solves tricky problems including how to position or
              dynamically resize elements on a page
              </p>
            </div>

            <div className={styles.box}>
              <h2><i class={styles.arrows}></i>
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