import Head from 'next/head'
import styles from './layout.module.scss'
import Link from 'next/link'
import React from 'react'

export const siteTitle = 'Next.js Sample Website'

type LayoutProps = {
  children: React.ReactNode
  home?: boolean
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.now.sh/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="viewport" content="width=device-width,initial-scale=1.0" />
      </Head>
      <header className={styles.header}>
        <Link href="/">
          <a>
            <h1>fe-life</h1>
          </a>
        </Link>
        <p>フロントエンドエンジニアの技術ブログ</p>
      </header>
      <main className={styles.main}>
        <article className={styles.article}>{children}</article>
        <div className={styles.sidenav}>
          <div className={styles.profile}>
            <h6>プロフィール</h6>
            <div className={styles.profileWrap}>
              <div className={styles.leftItem}>
                <img src="/images/profile.jpeg" alt="プロフィール画像" />
                <p className={styles.name}>しょうえい</p>
              </div>
              <p className={styles.description}>
                フリーランスエンジニアのしょうえいです。
                <br />
                主にフロントエンド周りの技術について備忘録も兼ねて書き留めていく予定です。
              </p>
            </div>
          </div>
        </div>
      </main>
      <footer className={styles.footer}>
        <p>© 2021 fe-life.</p>
      </footer>
    </div>
  )
}

export default Layout
