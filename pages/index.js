import Head from 'next/head'
import Script from 'next/script'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>ぐゑのぽーとふぉりを</title>
        <meta name="description" content="なんか知らんけど、ポートフォリオを晒す。" />
        <link rel="icon" href="/favicon.ico" />

        
        
      </Head>
      <div className={styles.header}>
          <div className={styles.header_inner} >
            <a className={styles.header_logo} href="./index.js">
              <img src="https://github.com/ghevp/my-portfolio/blob/main/img/001.JPG?raw=true" alt="gue"></img>
            </a>
            
            <button className={styles.button} ></button>
            <div className={styles.header_site_menu} >
              <nav className={styles.site_menu} >
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
          僕が制作してきたものをご紹介します。<br></br>
          また、ハンバーガーメニューは現在使用できません。<br></br>
          理由はnext jsがよくわからないからです。
        </p>
        <div className={styles.tell}>
          <div className={styles.tell_include}>
          <a href="https://gakujochan.com"><h2>学情チャン</h2>
          <img src="https://github.com/ghevp/my-portfolio/blob/main/img/gakujochan.jpg?raw=true"></img>
          </a>
          <a href="https://ghevp.com"><h2>ぐゑのサイト</h2>
          <img src="https://github.com/ghevp/my-portfolio/blob/main/img/001.JPG?raw=true" alt="gue"></img>
          </a>
          <a href="https://studinfo-shizuhama.ghevp.com"><h2>静浜学生情報サイト</h2>
          <img src="https://github.com/ghevp/my-portfolio/blob/main/img/favicon.png?raw=true"></img> </a>
          </div>
        </div>  
        <div className={styles.introduce_before}>
          <h1>自己紹介</h1>
          <div className={styles.intro1}>
          <div className={styles.introduce}>
           

          <ul>
            <li><h1>谷口元仁</h1></li>
            <li>
              <p>平成14年生まれ</p>
              <p className={styles.shizudai}>静岡大学情報学部行動情報学科2年生</p>
              <p>宮城県仙台市生まれ</p>
              <p>三重県四日市市育ち</p>
            </li>
            </ul>
            </div>
          </div>
          <div className={styles.details}>
            <p>あんまり強くないです。<br></br>
            むしろ弱いです。めっちゃ弱いです。<br></br>
            カスのhtmlやphp、javaを書きます。<br></br>
            その他の言語は非対応！！<br></br>
            あと一応あっとこーだもやってます。<br></br>
            弱すぎて他の人の見ると鬱になっちゃうので基本他人のは見ません</p>
          </div>
          <div className={styles.rinks}>
            <ul>
              <li><a href="https://github.com/ghevp"><p>ぎっとはぶ</p></a> </li>
              <li><a href="https://atcoder.jp/users/ghevp"><p>あっとこーだ</p></a> </li>
            </ul>
          </div>
        </div>
        <div className={styles.grid}>
        

        
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
