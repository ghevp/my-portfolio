import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>ぐゑのぽーとふぉりを</title>
        <meta name="description" content="なんか知らんけど、ポートフォリオを晒す。" />
        <link rel="icon" href="/favicon.ico" />
        <style>
@import url('https://fonts.googleapis.com/css2?family=Noto+Serif+JP:wght@500&display=swap');
</style> 
      </Head>
      <div className={styles.header}>
          <div className={styles.header.inner}>
            <button className={styles.button}></button>
            <div className={styles.header_site_menu}>
              <nav className={styles.site_menu}>
                <ul>
                  <li>うんち</li>{/*あとでリンクを挿入する*/}
                  <li>うんちっち</li>
                  <li>学情チャン</li>
                  <li>ついったー</li>
                  <li>陰スタグラム</li>
                  <li>あっとこーだ</li>
                  <li>言語変更</li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      <main className={styles.main}>

        <h1 className={styles.title}>
          ぐゑのぽーとふぉりをへようこそ!
        </h1>

        <p className={styles.description}>
          あばばばばばばばばば
          <code className={styles.code}>pages/index.js</code>
        </p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Learn &rarr;</h2>
            <p>中身の入れ子</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className={styles.card}
          >
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site おおおおおto a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://ghevp.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by ぐゑ
    
        </a>
      </footer>
    </div>
  )
}
